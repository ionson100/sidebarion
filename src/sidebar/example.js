
import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "./expSide.css"
import Image from "react-bootstrap/Image";
import { FiAlignJustify } from "react-icons/fi";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {PureComponent} from "react";
import { v4 as uuidv4 } from 'uuid';

class SideBarion extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
           barData:props.barData,
            /**
             * так как PureComponent делает поверхностное сравнение состояния
             * пришлось добавить поле верхнего уровня, для рендеринга открытия закрытия вкладки меню
             */
            markerUpdate:uuidv4()
        };
        /**
         * это словарб всех нод меню, ключем является id меню,а занчением ссылка на объект меню
         * для быстрого поиска по щелчку
         * @type {Map}
         */
        this.mapMenu=new Map();
        /**
         * первоначально выстраиваем словарь нодов
         */
        this._createMap(this.props.barData.menuItems)
        /**
         * Последнее нажатое меню
         * @type {{id: undefined}}
         */
        this.currentMenuItem={id:undefined};
        /**
         * Маркер для возбуждения события наружу, что пользователь кликнул меню
         * @type {boolean}
         */
        this.isRender=false;

    }

    get barData(){
        const {barData}=this.state;
        return barData;
    }

    /**
     * подписка на клик обносления снаружи
     */
    componentDidMount() {
        this.barData.on("render",()=>{
            this._createMap(this.barData.menuItems)
            this.forceUpdate();
        })
        window.addEventListener('resize', (e) => {
            if(document.body.clientWidth < 770 && this.state.barData.isOpen) {
                this.toggleMenu();
            }
            else if(document.body.clientWidth > 770 && !this.state.barData.isOpen) {
                this.toggleMenu();
            }
        }, true);
    }

    /**
     * отсылка сообщения наружк, клик по меню
     */
    componentDidUpdate(){

        if(this.isRender){
            this.isRender=false;
            this.barData.dispatch("onclick",this.currentMenuItem);
        }
    }

    /**
     * пополнение словаря новыми нодами меню ( при старте и при рендеринге снаружи)
     * @param menus
     * @private
     */
    _createMap(menus){
       let d= Array.prototype.slice.call(menus)
       d.map((m)=>{

           if(this.mapMenu.has(m.id)===false){
               this.mapMenu.set(m.id,m);
           }

           if(m.menuItems.length>0){
               this._createMap(m.menuItems);
           }
           return false;
       })
    }


    /**
     * пользователь кликнул, по меню
     * @param uuid
     */
    clickItem(uuid) {

        const  d=this.mapMenu.get(uuid);// получаем объект меню  из словаря
        if(d){
            this.mapMenu.forEach((v,k)=>{
                v._isSelect=false; // снимаем выделение со всех нодов
            })
            d._isSelect=true; // выделяем нажатый нод
            d._isVisibleSubmenu = d._isVisibleSubmenu === false;// показываем или закрываем субменю у этого меню
            if(this.currentMenuItem.id!==uuid){ // если текущее меню не совпадает с нажатым
                this.currentMenuItem=d;// текущее делаем нажатым
                this.isRender=true;// ставим метку, чтобы после рендеринга ушло сообщение наружу

            }
            this.forceUpdate();// кучной рендеринг



        }else{
            console.error(`не могу найти блок меню с id: ${uuid}` )// если объект не найден, в консоль ошибку
        }

    }

    /**
     * обновление иконки у меню
     * @param row объект меню
     * @returns {JSX.Element}
     */
    refreshImage(row){
        if(row.imageSrc){
            if(typeof row.imageSrc === 'string'){
                return ( (<div className="col-md-auto ionImageSubMenu " >
                    <Image src={row.imageSrc} alt={row.imageAlt} width={row.imageSize} height={row.imageSize} />
                </div>));
            }else{
                return (
                    (<div className="col-md-auto ionImageSubMenu " >
                        {row.imageSrc}
                    </div>)
                );
            }
        }
    }

    /**
     * обновление иконки открытия - закрытия субменю
     * @param row объект меню
     * @returns {JSX.Element}
     */
    refreshImageToggleMenu(row){
        if(this.barData.imageToggleNode1&&
            this.barData.imageToggleNode2&&
            row.menuItems.length>0&&
            this.state.barData.isOpen){// если пользователь задал иконки, у меню есть субменю,если меню не свернуто
            return (
                (

                    <div className="col-md-auto ionImageToggle " >
                      {row._isVisibleSubmenu===false?this.barData.imageToggleNode1:this.barData.imageToggleNode2}
                    </div>
                  )
            );
        }

    }

    refreshContent(row){
        if(row.content){
            if(typeof row.content==="string"){
               return(<span  >{row.content}</span>);
            }else{
                return (<div>{row.content}</div>)
            }
        }else{
          return(<span  >Not content</span>);
        }
    }

    renderSubmenu(menuItem){
        if(menuItem.menuItems.length>0){

            return(

                <ul className="flex" style={{display:this.getDisplay(menuItem)}}>
                    {menuItem.menuItems.map((row,i)=>{
                        return(
                            <li key={row.id} className="container  ionContainer " style={{display:row.isShow===true?"block":"none"}}>

                                <Link to={row.href} className="ionLink">
                                    <div className={this.getClassNameSubMenuItem(row)} id={row.id} onClick={(event)=>{this.clickItem(row.id)}}>
                                        {this.refreshImage(row)}
                                        <div className="col align-self-center">
                                            {this.refreshContent(row)}
                                        </div>
                                        {this.refreshImageToggleMenu(row)}
                                    </div>
                                </Link>
                                {this.renderSubmenu(row)}
                            </li>
                        );
                    })}
                </ul>
            );
        }else{
            return "";
        }
    }


    /**
     * смена className у элемента корня
     * @param row
     * @returns {string}
     */
    getClassNameMenuItem(row){
        if(row._isSelect){
            return "row selectMenu"
        }else{
            return "row defaultMenu"
        }
    }

    /**
     * Смена className у элемнта субменю
     * @param row
     * @returns {string}
     */

    getClassNameSubMenuItem(row){
        if(row._isSelect){
            return "row selectSubMenu"
        }else{
            return "row defaultSubMenu"
        }
    }

    getDisplay(row){

        if(this.state.barData.isOpen){
            if(row){
               if(row._isVisibleSubmenu===true){
                   return "block";
               }else{
                   return "none";
               }
            }
            return "block";
        }
        else{
            return "none";
        }
    }

    /**
     * Открыть, Закрыть меню
     */
    toggleMenu(){

        if(this.state.barData.isOpen){

            this.setState(prevState => {
                let proxy = Object.assign({}, prevState);
                proxy.barData.isOpen=false;
                proxy.markerUpdate=uuidv4();
                return proxy;
            },()=>{

                this.setState(prevState => {
                    let proxy = Object.assign({}, prevState);
                    proxy.barData._currentWidth=this.barData.closeWidth;
                    proxy.markerUpdate=uuidv4();
                    return proxy;
                })
            })

        }else{

            this.setState(prevState => {
                let proxy = Object.assign({}, prevState);
                proxy.barData._currentWidth=this.barData.openWidth;
                proxy.markerUpdate=uuidv4();
                return proxy;
            },()=>{
                this.setState(prevState => {
                    let proxy = Object.assign({}, prevState);
                    proxy.barData.isOpen=true;
                    proxy.markerUpdate=uuidv4();
                    return proxy;
                })
            })
        }

    }

    /**
     * обработка подсказки для закрытого меню
     * @param row
     * @returns {JSX.Element}
     */
    overlayTooltipMenu(row){

        if(row.tooltip&&this.barData.isOpen===false){ // если пользователь задал подсказку, и меню закрытое.
            return (
                <OverlayTrigger  placement="right-end" overlay={<Tooltip id={row.id}>{row.tooltip}</Tooltip>}>
                  <div className={this.getClassNameMenuItem(row)}  id={row.id}
                      onClick={(event)=>{this.clickItem(row.id)}}>
                      {this.refreshImage(row)}
                      <div className="col align-self-center"  style={{display:this.getDisplay(null)}}>
                        {this.refreshContent(row)}
                     </div>
                  </div>
                </OverlayTrigger>
            );
        }
        return (
            <div className={this.getClassNameMenuItem(row)}  id={row.id}
                 onClick={(event)=>{this.clickItem(row.id)}}>
                {this.refreshImage(row)}
                <div className="col align-self-center"  style={{display:this.getDisplay(null)}}>
                    {this.refreshContent(row)}
                </div>
                {this.refreshImageToggleMenu(row)}

            </div>
        );

    }

    /**
     * рендериг корневого меню
     * @returns {JSX.Element}
     */
    render() {
        return(
            <Router>

                    <div id="menu" className="menu">
                        <div className="ionMenu" style={{width: this.barData._currentWidth}}>

                                <div className="ionSideHead" style={{display:this.getDisplay(null)}}>
                                    <span id="ionSideHeadText">{this.barData?.head?.content??"None"}</span>
                                </div>
                                <ul className="nav">
                                    {this.barData.menuItems.map((row,i)=>{
                                        return (
                                            <li key={row.id} className="container  ionContainer p-0 menuitem" style={{display:row.isShow===true?"block":"none"}} >
                                                <Link to={row.href} className="ionLink">
                                                    {this.overlayTooltipMenu(row)}
                                                </Link>
                                                {this.renderSubmenu(row)}
                                            </li>
                                        );
                                    })}
                                </ul>

                        </div>

                    </div>


                <div className="hamburger">
                    <FiAlignJustify
                        color="#a5a89d"
                        size={30}
                        className="toggleOpen"
                        style={{display:this.getDispalyToogleOpen()}}
                        onClick={this.toggleMenu.bind(this)}
                    />
                </div>

            </Router>
        );
    }


    /**
     * Обработка показа кнопки закрытия открытия меню
     * @returns {string}
     */
    getDispalyToogleOpen() {

        if(this.barData.closeWidth===this.barData.openWidth){ // если ра
            return "none";
        }else{
            return "block";
        }

    }
}



export default SideBarion;





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
            markerUpdate:uuidv4()
        };
        this.mapMenu=new Map();
        this._createMap(this.props.barData.menuItems)
        console.log(this.mapMenu)
        this.currentMenuItem={id:undefined};
        this.isRender=false;


    }

    componentDidMount() {

        this.state.barData.on("render",()=>{
            console.log(`add menu id click: `,this.state.barData.menuItems[1])
            this._createMap(this.state.barData.menuItems)
            this.forceUpdate();
        })
    }
    componentDidUpdate(){

        if(this.isRender){
            this.isRender=false;
            this.state.barData.dispatch("onclick",this.currentMenuItem);
        }
    }

    _createMap(menus){
       let d= Array.prototype.slice.call(menus)
       d.map((m)=>{

               console.log(`add menu id: `,m.id)
           if(this.mapMenu.has(m.id)===false){
               this.mapMenu.set(m.id,m);
           }

           if(m.menuItems.length>0){
               this._createMap(m.menuItems);
           }
       })
    }


    clickItem(uuid) {

        const  d=this.mapMenu.get(uuid);
        if(d){
            this.mapMenu.forEach((v,k)=>{
                v._isSelect=false;
            })
            d._isSelect=true;
            d._isVisibleSubmenu = d._isVisibleSubmenu === false;
            if(this.currentMenuItem.id!==uuid){
                this.currentMenuItem=d;
                this.isRender=true;

            }
            this.forceUpdate();



        }else{
            console.error(`не могу найти блок меню с id: ${uuid}` )
        }

    }
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
                <ul  className=" flex" style={{display:this.getDisplay(menuItem)}}>

                    {menuItem.menuItems.map((row,i)=>{
                        return(
                            <li key={row.id} className="container  ionContainer ">

                                <Link to={row.href} className="ionLink">
                                    <div className={this.getClassNameSubMenuItem(row)} id={row.id} onClick={(event)=>{this.clickItem(row.id)}}>
                                        {this.refreshImage(row)}
                                        <div className="col align-self-center">
                                            {this.refreshContent(row)}
                                        </div>
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



    getClassNameMenuItem(row){
        if(row._isSelect){
            return "row selectMenu"
        }else{
            return "row defaultMenu"
        }
    }

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
    toggleMenu(){

        if(this.state.barData.isOpen===true){

            this.setState(prevState => {
                let proxy = Object.assign({}, prevState);  // creating copy of state variable jasper
                proxy.barData.isOpen=false;
                proxy.markerUpdate=uuidv4();// update the name property, assign a new value
                return proxy;                                // return new object jasper object
            },()=>{

                this.setState(prevState => {
                    let proxy = Object.assign({}, prevState);  // creating copy of state variable jasper
                    proxy.barData._currentWidth=this.state.barData.closeWidth;
                    proxy.markerUpdate=uuidv4();// update the name property, assign a new value
                    return proxy;                                // return new object jasper object
                })
            })

        }else{

            this.setState(prevState => {
                let proxy = Object.assign({}, prevState);  // creating copy of state variable jasper
                proxy.barData._currentWidth=this.state.barData.openWidth;
                proxy.markerUpdate=uuidv4();// update the name property, assign a new value
                return proxy;                                // return new object jasper object
            },()=>{
                this.setState(prevState => {
                    let proxy = Object.assign({}, prevState);  // creating copy of state variable jasper
                    proxy.barData.isOpen=true;
                    proxy.markerUpdate=uuidv4();// update the name property, assign a new value
                    return proxy;                                // return new object jasper object
                })
            })
        }

    }
    overlayTooltipMenu(row){

        if(row.tooltip&&this.state.barData.isOpen==false){
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
            </div>
        );

    }
    render() {
        return(
            <Router>

            <div className="container-fluid overflow-hidden bg-dark p-0" id="menu">
                <div className="row vh-100 overflow-auto  p-0">
                    <div className=" col-auto  d-flex   ionMenu" style={{width:this.state.barData._currentWidth}}>
                        <div className="d-flex flex-md-column ">
                            <div className="ionSideHead" style={{display:this.getDisplay(null)}}>
                                <span id="ionSideHeadText">{this.state.barData?.head?.content??"None"}</span>
                            </div>
                            <ul  className="nav"     >
                                {this.state.barData.menuItems.map((row,i)=>{
                                    return(
                                        <li key={row.id} className="container  ionContainer p-0 menuitem">
                                            <Link to={row.href} className="ionLink">
                                                {this.overlayTooltipMenu(row)}
                                            </Link>
                                            {this.renderSubmenu(row)}
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className=" py-sm-0 mt-sm-auto ms-auto ms-sm-0  p-0">

                                  <FiAlignJustify color="#a5a89d" size={30} className="toggleOpen" style={{display:this.getDispalyToogleOpen()}} onClick={this.toggleMenu.bind(this)}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            </Router>
        );
    }
    toggleOpen(){

    }

    getDispalyToogleOpen() {

        if(this.state.barData.closeWidth===this.state.barData.openWidth){
            return "none";
        }else{
            return "block";
        }

    }
}

export default SideBarion;




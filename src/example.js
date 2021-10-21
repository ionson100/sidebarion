import { FaRocket,FaAddressCard} from 'react-icons/fa';
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {isVisible} from "bootstrap/js/src/util";
import "./expSide.css"
import {forEach} from "react-bootstrap/ElementChildren";
import SideBarData from "./SideBarData";
import Image from "react-bootstrap/Image";




class SideBarion extends SideBarData{
    constructor(props) {
        super(props);
        this.state = {
           barData:props.barData
        };
        this.mapMenu=new Map();
        console.log(props.barData)
        this._greateMap(this.props.barData.menuItems)
        console.log(this.mapMenu)


    }
    _greateMap(menus){

       let d= Array.prototype.slice.call(menus)
       d.map((m)=>{
           this.mapMenu.set(m.id,m);
           if(m.menuItems.length>0){
               this._greateMap(m.menuItems);
           }
       })
    }

    updateItem(uuid) {
        this.mapMenu.forEach((v,k)=>{
            v._isSelect=false;

        })
        const  d=this.mapMenu.get(uuid);
        if(d){
            d._isSelect=true;
            d._isVisibleSubmenu = d._isVisibleSubmenu === false;
        }
        this.forceUpdate();
    }
    refreshImage(row){
        if(row.imageSrc){
            if(typeof row.imageSrc === 'string'){
                return ( (<div className="col-md-auto ionImageSubMeny " >
                    <Image src={row.imageSrc} alt={row.imageAlt} width={row.imageSize} height={row.imageSize} />
                </div>));
            }else{
                return (
                    (<div className="col-md-auto ionImageSubMeny " >
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
                <ul  className=" flex-sm-column " style={{display:menuItem._isVisibleSubmenu?'block':'none'}}>

                    {menuItem.menuItems.map((row,i)=>{
                        return(
                            <li key={row.id} className="container  ionContainer submenuitem">

                                <Link to={row.href} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                    <div className="row w-100  ionlink " id={row.id}
                                         onClick={(event)=>{this.updateItem(row.id)}}
                                         style={{background:row._isSelect?this.state.barData.selectBackground:"inherit"}}>

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
    updateModal(e) {

        this.state.isVisible = this.state.isVisible === false;
        this.forceUpdate();  e.currentTarget.classList.add("ionSelect")
    }


    render() {
        return(
            <Router>
            <div className="container-fluid overflow-hidden " id="menu">
                <div className="row vh-100 overflow-auto">
                    <div className="col-12 col-sm-3 col-xl-2 px-sm-0 px-0 bg-dark d-flex sticky-top">
                        <div
                            className="d-flex flex-sm-column flex-row flex-grow-1  align-items-sm-start px-4 pt-0 ">
                            <div id="ionSideHead">
                                <span id="ionSideHeadText">{this.state.barData?.head?.content??"None"}</span>
                            </div>
                            <ul  className="nav nav-pills flex-sm-column w-100  p-0"  >

                                {this.state.barData.menuItems.map((row,i)=>{
                                    return(

                                        <li key={row.id} className="container  ionContainer p-0 menuitem">

                                            <Link to={row.href} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                                <div className="row w-100  ionlink p-0" id={row.id}
                                                     onClick={(event)=>{this.updateItem(row.id)}}
                                                     style={{background:row._isSelect?this.state.barData.selectBackground:"inherit"}}>
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


                            <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                                <button
                                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28"
                                         className="rounded-circle"/>
                                    <span className="d-none d-sm-inline mx-1">Joe</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow"
                                    aria-labelledby="dropdownUser1">
                                    <li><button className="dropdown-item" >New project...</button></li>
                                    <li><button className="dropdown-item" >Settings</button></li>
                                    <li><button className="dropdown-item" >Profile</button></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><button className="dropdown-item" >Sign out</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Router>
        );
    }
}

export default SideBarion;




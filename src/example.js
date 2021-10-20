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



class SideBarion extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            rows:props.rows
        };


    }
    updateModal(e) {

        this.state.isVisible = this.state.isVisible === false;
        this.forceUpdate();  e.currentTarget.classList.add("ionSelect")
    }
    render() {
        return(
            <div className="container-fluid overflow-hidden">
                <div className="row vh-100 overflow-auto">
                    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
                        <div
                            className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                            <div
                                className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5">B<span className="d-none d-sm-inline">rand</span></span>
                            </div>
                            <ul  className="nav nav-pills flex-sm-column w-100"
                                id="menu">
                                <li className="nav-item">
                                    <button  className="nav-link px-sm-0 px-2">
                                        <Link to="/iweuiwe">
                                            <i className="fs-5 bi-house"></i><span
                                            className="ms-1 d-none d-sm-inline">Home</span>
                                        </Link>
                                    </button>
                                </li>
                                <li>
                                    <button  data-bs-toggle="collapse" className="nav-link px-sm-0 px-2">
                                        <i className="fs-5 bi-speedometer2"></i><span
                                        className="ms-1 d-none d-sm-inline">Dashboard</span> </button>
                                </li>
                                <li className="container  ionContainer ">
                                    <Link to="/sasas">
                                        <div className="row w-100  ionlink "  >
                                            <div className="col-md-auto ionImagRadius " >
                                                <FaRocket   size={30}/>
                                            </div>
                                            <div className="col align-self-center">
                                                <span  >Span</span>
                                            </div>


                                        </div>
                                    </Link>

                                </li>
                                <li className="container  ionContainer ">

                                        <Link to="/sasas" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                        <div className="row w-100  ionlink " onClick={(event)=>{this.updateModal(event)}} >
                                            <div className="col-md-auto ionImagRadius " >
                                                <FaAddressCard   size={30}/>
                                            </div>
                                            <div className="col align-self-center">
                                                <span  >Bootstrap</span>
                                            </div>


                                        </div>
                                        </Link>


                                    <ul style={{display:this.state.isVisible?'block':'none'}} className=" flex-sm-column " >
                                        {this.state.rows.map((row, i)=>{
                                            return(
                                                <li><button className="nav-link px-sm-0 px-2" >New project...</button></li>
                                            );

                                        })}
                                        {/*<li><button className="nav-link px-sm-0 px-2" >New project...</button></li>*/}
                                        {/*<li><button className="nav-link px-sm-0 px-2" >Settings</button></li>*/}
                                        {/*<li><button className="nav-link px-sm-0 px-2" >Profile</button></li>*/}
                                        {/*<li>*/}
                                        {/*    <hr className="nav-link px-sm-0 px-2"/>*/}
                                        {/*</li>*/}
                                        {/*<li><button className="nav-link px-sm-0 px-2" >Sign out</button></li>*/}
                                    </ul>
                                </li>
                                <li>
                                    <button  className="nav-link px-sm-0 px-2">
                                        <i className="fs-5 bi-grid"></i><span
                                        className="ms-1 d-none d-sm-inline">Products</span></button>
                                </li>
                                <li>
                                    <button  className="nav-link px-sm-0 px-2">
                                        <i className="fs-5 bi-people"></i><span
                                        className="ms-1 d-none d-sm-inline">Customers</span> </button>
                                </li>
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
        );
    }
}

export default SideBarion;
// You can think of these components as "pages"
// in your app.



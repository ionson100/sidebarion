import App from "./example";
import ReactDOM from "react-dom";
import React from "react";
export default class WrapperSideBar {
    constructor(prop,root) {
        this.barData=prop;
        this.root=root;
    }
    init(){
        ReactDOM.render(
            <App barData={this.barData}/>
            ,
            document.getElementById(this.root)
        );
    }

}
// import { v4 as uuidv4 } from 'uuid';
// import Dispatcher from "./Dispetcher";
//
//
// export  class BarData extends Dispatcher{
//     constructor() {
//         super();
//         this.head=new Head();
//         this.menuItems=[]
//         this.footer={}
//         this._openWidth=300;
//         this._currentWidth=300
//         this.closeWidth=100;
//         this.selectBackground="red"
//         this.isOpen=true;
//     }
//
//     set openWidth(value){
//        this._openWidth=value;
//        this._currentWidth=value;
//     }
//     get openWidth(){
//         return this._openWidth;
//     }
//     forceUpdate(){
//         this.dispatch("render",{})
//     }
// }
//  export class Head {
//     constructor(content="myApp",isShow=true) {
//         this.content=content;
//         this.isShow=isShow;
//     }
// }
// export class MenuItem {
//  constructor() {
//      this.id=uuidv4();
//      this.content="mymenu";
//      this.isShow=true;
//      this.href="/#";
//      this.menuItems=[];
//      this._isSelect=false;
//      this._isVisibleSubmenu=false;
//      this.imageSize=30;
//      this.imageSrc=null;
//      this.imageMode=null;
//      this.imageAlt=".."
//      this.tooltip=undefined
//
//  }
//
// }
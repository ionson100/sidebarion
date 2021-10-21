import { v4 as uuidv4 } from 'uuid';
export default class BarData {
    constructor() {
        this.head=new Head();
        this.menuItems=[]
        this.footer={}
        this.selectBackground="red"
    }
}
 export class Head {
    constructor(content="myApp",isShow=true) {
        this.content=content;
        this.isShow=isShow;
    }
}
export class MenuItem {
 constructor() {
     this.id=uuidv4();
     this.content="mymenu";
     this.isShow=true;
     this.href="/#";
     this.menuItems=[];
     this._isSelect=false;
     this._isVisibleSubmenu=false;
     this.imageSize=30;
     this.imageSrc=null;
     this.imageMode=null;
     this.imageAlt=".."

 }
}
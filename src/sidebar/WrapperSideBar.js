import App from "./example";
import ReactDOM from "react-dom";
import React from "react";
import Dispatcher from "../utils/Dispetcher";
import {v4 as uuidv4} from "uuid";
import { BsCaretRight,BsCaretDown } from "react-icons/bs";



export default class WrapperSideBar {
    constructor(prop,root) {
        this.barData=prop;
        this.root=root;
        this.init();
    }
    init(){
        ReactDOM.render(
            <App barData={this.barData}/>
            ,
            document.getElementById(this.root)
        );
    }

}

 class BarData extends Dispatcher{
    constructor() {
        super();
        this.head=new Head();
        /**
         * элементы меню тип: MenuItem
         * @type {*[]}
         */
        this.menuItems=[]
        this._openWidth=300;
        this._currentWidth=300
        /**
         * Ширина меню в закрытом сотоянии
         * @type {number}
         */
        this.closeWidth=100;
        /**
         * Состояние открытости меню
         * @type {boolean}
         */
        this.isOpen=true;
        /**
         * иконка состояния открытости ноды меню ...1- закрыта, ...2- открыта
         * может принимать только React элемент (IconType)
         * @type {JSX.Element}
         */
        this.imageToggleNode1=<BsCaretRight color="#00cc00"/>
        this.imageToggleNode2=<BsCaretDown color="#00cc00"/>

    }

     /**
      * установка ширины открытого меню
      * @param value
      */
    set openWidth(value){
        this._openWidth=value;
        this._currentWidth=value;
    }
    get openWidth(){
        return this._openWidth;
    }

     /**
      * Обновление меню снаружи
      */
    forceUpdate(){
        this.dispatch("render",{})
    }
}

/**
 * верняя часть меню, шапка
 */
 class Head {
    constructor(content="myApp",isShow=true) {
        /**
         * содержание, может принимать как строку так и react элемент
         * @type {string}
         */
        this.content=content;
        /**
         * не реализовано
         * @type {boolean}
         */
        this.isShow=isShow;
    }
}

/**
 * Элемент меню
 */
 class MenuItem {
    constructor() {
        /**
         * Идентификатор меню, уникальность по умолчанию uuid,
         * можно назначать от пользователя
         * @type {*}
         */
        this.id=uuidv4();
        /**
         * содержание меню, может быть строкой или react элементом
         * @type {string}
         */
        this.content="mymenu";
        /**
         * управление показом меню
         * @type {boolean}
         */
        this.isShow=true;
        /**
         * Маршрут ссылки меню
         * @type {string}
         */
        this.href="/#";
        /**
         * список субменю {MenuItem}
         * @type {*[]}
         */
        this.menuItems=[];
        /**
         * маркер выбора меню
         * @type {boolean} true выбрано
         * @private
         */
        this._isSelect=false;
        /**
         * маркер управления открыванием субменю
         * @type {boolean}
         * @private
         */
        this._isVisibleSubmenu=false;
        /**
         * размер иконки меню, применяется если иконка из статических фалйов
         * @type {number}
         */
        this.imageSize=30;
        /**
         * url статического файла иконки или React элемент
         * @type {null}
         */
        this.imageSrc=null;
        this.imageMode=null;
        this.imageAlt=".."
        /**
         * Подстказка меню, применяется только при свернутом меню
         * @type {undefined}
         */
        this.tooltip=undefined
    }
}


export {BarData,Head,MenuItem}

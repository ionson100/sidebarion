import App from "./index";
import ReactDOM from "react-dom";
import React from "react";
import Dispatcher from "./Dispetcher";
import {v4 as uuidv4} from "uuid";




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
        this.mapMenu= new Map();
        /**
         * иконка для трее, строка или jsx
         * @type {string|JSX.Element}
         */
        this.iconTree=undefined
        /**
         * Размер иконки открытой tree, для статических файлов
         * @type {number}
         */
        this.iconTreeSize=20;
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
        this.imageToggleNode1=undefined
        this.imageToggleNode2=undefined
        /**
         * Иконка кнопки управления состоянием бокового меню
         * @type {string|JSX.Element}
         */
        this.iconToggleMenu=undefined
        this.refreshMap.bind(this)






    }

    /**
     * Внутренний метод обновления словаря меню
     */
    refreshMap(){

        this.menuItems.map((m)=>{
            this._innerRefreshMap(m)

        })
    }
    _innerRefreshMap(m){
        if(this.mapMenu.has(m.id)===false){
            this.mapMenu.set(m.id,m);
        }
        if(m.menuItems){
            m.menuItems.map((mm)=>{
                this._innerRefreshMap(mm)
            })
        }

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

    rollUp(){
        if(this.menuItems){
            this.menuItems.map((m)=>{this._innerPollUp(m)
            })
        }
        this.forceUpdate();

    }
    _innerPollUp(menu=[]){

        menu._isSelect=false;
        menu._isVisibleSubmenu=false;
        if(menu.menuitem){
            menu.menuitem.map((m1)=>{
                this._innerPollUp(m1)
            })

        }

    }


}

/**
 * верхняя часть меню, шапка
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
         * Подсказка меню, применяется только при свернутом меню, строка или элемент React
         * @type {string|jsx}
         */
        this.tooltip=undefined

        /**
         *  url статического файла иконки или React элемент, картинка открытого блока, как в трее
         * @type {string|jsx}
         */
        this.imageSrcOpen=null;


        /**
         * Выделять меню или не выделять, случай - пользовательский компонент (тип курсора при наведении, поведение при наведении курсора, при клике )
         * например если вы хотите сделать элемент меню, как выпадающий список, или строка ввода
         * @type {boolean}
         */
        this.isSelected=true;

        /**
         * Пользовательские данные
         * @type {undefined}
         */
        this.userData=undefined;
        this.userData1=undefined;
        this.userData2=undefined;
        this.userData3=undefined;
    }
}


export {BarData,Head,MenuItem}

# Динамическое меню проект audio

Динамическое меню на React, bootstrap5 
#### Можно использовать как Tree;
![Alt text](img1.png "Title")
#### как меню;
![Alt text](img2.png "Title")
#### как меню в закрытом состоянии;
![Alt text](img3.png "Title")
меню работает на основе объекта модели BarData
``````
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
    * иконка состояния открытости ноды меню ...1- закрыта, ...2- открыта
    * может принимать только React элемент (IconType)
    * @type {JSX.Element}
   */
     this.imageToggleNode1=undefined
     this.imageToggleNode2=undefined
        
     /**
      * Обновление меню снаружи
      */
    forceUpdate(){
        this.dispatch("render",{})
    }
}
``````
Меню может содержать подменю, с неограниченной вложенностью (в пределах разумного)
объект меню содержит поля:
``````
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
``````
запуск - инициализация:
``````
import {BarData, Head, MenuItem} from "./sidebar/WrapperSideBar";

const barData= new BarData()l
..
..
new WrapperSideBar(barData,"root");
``````
подписка на события клика:
`````
barData.on("onclick",(menuitem)=>{
   console.log(menuitem)
    //menuitem.isShow=false; меняем свойство меню
    //barData.forceUpdate(); рефрешим показ
})
`````
### установка: 
```
npm install https://github.com/ionson100/sidebarion
```
### использование: index.js
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals'
import './index.css';


import WrapperSideBar, {MenuItem} from "sidebarion/dist/WrapperSideBar";
import {barData,imgSizeSm,colorImage} from "./TestMenu"
import "./testMenu.css"


barData.closeWidth=60;// ширина зарытого контейнера
barData.openWidth=280;// ширина открытого контейнера
barData.isOpen=true;  // состояние  - открыто

/**
 * создаем меню
 */
new WrapperSideBar(barData,"root");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
### TestMenu.js
```javascript
import {BarData, Head, MenuItem} from "sidebarion/dist/WrapperSideBar";
import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { AiFillBug,AiFillCloud,AiOutlineAndroid,AiOutlineBug,AiOutlineGlobal} from "react-icons/ai";
import {BsCaretDown, BsCaretRight} from "react-icons/bs";
import { IoIosBoat,IoIosBusiness,IoIosAirplane,IoIosAperture,IoIosContacts } from "react-icons/io";
import {Form} from "react-bootstrap/esm";


export const imgSize=25;
export const imgSizeSm=20;
export const colorImage="#ca981c"
export   const barData=new BarData();

barData.iconToggleMenu=<FiAlignJustify size={30} color={colorImage}/>
barData.imageToggleNode1=<BsCaretRight size={20} color={colorImage}/>
barData.imageToggleNode2=<BsCaretDown  size={20} color={colorImage}/>


function myHeader(){
    return(<Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label style={{color:"white"}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label style={{color:"white"}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    </Form>)
}
barData.head=new Head(myHeader())

{
    const mymenu=new MenuItem();
    mymenu.content="Menu1"
    mymenu.isShow=true;
    mymenu.href="sinple1";
    mymenu.imageSrc=<AiFillBug color={colorImage} size={imgSize}/>

    mymenu.imageSize=23;
    barData.menuItems.push(mymenu);
}
{
    const mymenu=new MenuItem();
    mymenu.content= "Menu2"
    mymenu.isShow=true;
    mymenu.href="Просто2";
    mymenu.imageSrc=<AiFillCloud  color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.tooltip="Simple my First Button"
    barData.menuItems.push(mymenu);

    {
        const mi=new MenuItem();
        mi.content="My Route 4";
        mi.href="/wwww21"
        mi.imageSize=imgSize;
        mi.imageSrc=<AiOutlineAndroid  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="Content 56";
        mi.href="/wwww22"
        mi.imageSize=imgSize;
        mi.imageSrc=<AiOutlineBug  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="Content 55";
        mi.href="/wwww23"
        mi.imageSize=10;
        mi.imageSrc=<AiOutlineGlobal color={colorImage} size={imgSizeSm} />

        mymenu.menuItems.push(mi);

    }

}
{
    const mymenu=new MenuItem();
    mymenu.content="Menu 33"
    mymenu.isShow=true;
    mymenu.imageSrc=<IoIosBusiness color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.href="Simple3";


    barData.menuItems.push(mymenu);
}
{
    const mymenu=new MenuItem();
    mymenu.content="Menu 3"
    mymenu.isShow=true;
    mymenu.imageSrc=<IoIosBoat color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.href="Simple3";


    barData.menuItems.push(mymenu);
}
{
    const mymenu=new MenuItem();
    mymenu.content="Menu part 56"
    mymenu.isShow=true;
    mymenu.imageSrc=<IoIosAirplane color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.href="Simple3";
    barData.menuItems.push(mymenu);
}
{
    const mymenu=new MenuItem();
    mymenu.content="Menu part 3"
    mymenu.isShow=true;
    mymenu.imageSrc=<IoIosAperture color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.href="Sinple3";
    {
        const mi=new MenuItem();
        mi.content="My Route 4";
        mi.href="/wwww21"
        mi.imageSize=imgSize;
        mi.imageSrc=<AiOutlineAndroid  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    barData.menuItems.push(mymenu);
}
{
    const mymenu=new MenuItem();
    mymenu.content="Menu part 33"
    mymenu.isShow=true;
    mymenu.imageSrc=<IoIosContacts color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.href="Sinple3";
    barData.menuItems.push(mymenu);
    {
        const mi=new MenuItem();
        mi.content="My Route 4";
        mi.href="/wwww21"
        mi.imageSize=imgSize;
        mi.imageSrc=<AiOutlineAndroid  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }


}

```
### testMenu.css
```css
:root{
    --background-menu: #2e3948;
    --hover-menu: #5a5a46;
    --select-menu: #53533c;
    --color-font: #f8f6f4;
    --color-font-select: #fdfde3;
    --color-font-hover: #e0eee0

}

.ionMenu{
    background: var(--background-menu);
    transition: all .1s linear;
    padding: 0px 5px;
    height: 100%;
    overflow: hidden;

}



.ionLink{
    font-size: 18px;
    color: var(--color-font);
    text-decoration: none;
}

.ionLink:hover{
    color: var(--color-font-select);
}

/*
стиль контейнера меню
 */
.ionContainer li{
    padding-left: 10px;
    margin-top: 0px;

}
/**
стиль коневой картинки
 */
.ionImageMenu{
    background: rgba(71, 71, 68, 0.95); /* Цвет фона */
    border: 2px solid black; /* Параметры рамки */
    padding-left: 3px; /* Поля вокруг текста */
    padding-right: 3px;
    margin: 3px;
    border-radius: 5px;
}
/**
Стиль картинки субменю
 */
.ionImageSubMenu{
    background: inherit; /* Цвет фона */
    border: 2px solid inherit; /* Параметры рамки */
    padding-left: 3px; /* Поля вокруг текста */
    padding-right: 3px;

    margin: 3px;
    border-radius: 5px;

}
/**
Стиль корневого меню не выбранного
 */
.defaultMenu{
    padding-left: 20px;
    margin-top: 0px;
}
.defaultMenu:hover{
    background: var(--hover-menu);
}
/**
Стиль корневого меню выбранного
 */
.selectMenu{
    background: var(--select-menu);
    padding-left: 20px;
    margin-top: 0px;
    color: var(--color-font-hover);

}

/**
стиль субменю не выбранное
 */
.defaultSubMenu{
    position: relative;
    margin-left: 0px;
    font-size: 15px;
    padding-left: 3px;
}

/**
стиль субменю выбранное
 */
.selectSubMenu{

    position: relative;
    background: var(--select-menu);
    font-size: 15px;
    color: var(--color-font-hover);
    margin-left: 0px;
    padding-left: 3px;

}
.defaultSubMenu:hover{
    background: var(--hover-menu);
}
/**
Стиль заголовка
 */
.ionSideHead{

    padding: 5px;
    color: black;
    text-align: left;
    height: 170px;
    width: 100%;
}


/**
Стиль иконки закрытия-открытия
 */
.toggleOpen{
    position: fixed;
    left: 17px;
    bottom: 6px;
}

.container-fluid {
    padding: 0;
    overflow: hidden;
}
/**
стиль иконки для открытия субменю
 */
.ionImageToggle{
    padding-right: 15px;
}
.movediv{
    /* запретить выделение*/
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}
.treePreImage{
    position: absolute;

    left: -40px;
    top:0px;
    z-index: 10000;

}
.scrollDiv{
    overflow-x: hidden;
    -ms-overflow-style: none;
}
.scrollDiv::-webkit-scrollbar { width: 0 !important }

```






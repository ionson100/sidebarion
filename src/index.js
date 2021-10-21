import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Buttons from "./Buttons";
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from "./example";
import WrapperSideBar from "./WrapperSideBar";
import BarData from "./BarData";
import {Head,MenuItem} from "./BarData";
import { FaRocket,FaAddressCard,FaAddressBook,FaStar} from 'react-icons/fa';
import Button from "react-bootstrap/Button";


const barData=new BarData();
barData.head=new Head("Просто приложение",true)
{
    const mymenu=new MenuItem();
    mymenu.content="Просто1"
    mymenu.isShow=true;
    mymenu.href="Просто1";
    mymenu.imageSrc=<FaAddressBook/>
    mymenu.imageSize=23;
    barData.menuItems.push(mymenu);
}
{
    const mymenu=new MenuItem();
    mymenu.content= "Моя первая кнопка Моя первая кнопка Моя первая кнопка"
    mymenu.isShow=true;
    mymenu.href="Просто2";
    mymenu.imageSrc=<FaStar/>
    mymenu.imageSize=23;
    barData.menuItems.push(mymenu);
    {
        const mi=new MenuItem();
        mi.content="wwww1";
        mi.href="/wwww1"
        mi.imageSize=20;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww2";
        mi.href="/wwww2"
        mi.imageSize=20;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww3";
        mi.href="/wwww3"
        mi.imageSize=20;
        mi.imageSrc="./images/image1.svg"

        mymenu.menuItems.push(mi);
    }
}
{
    const mymenu=new MenuItem();
    mymenu.content="Просто3"
    mymenu.isShow=true;
    mymenu.imageSrc="./images/image1.svg"
    mymenu.imageSize=23;
    mymenu.href="Просто3";
    {
        const mi=new MenuItem();
        mi.content="wwww1";
        mi.href="/wwww1"
        mi.imageSize=20;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww2";
        mi.href="/wwww2"
        mi.imageSize=20;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww3";
        mi.href="/wwww3"
        mi.imageSize=20;
        mi.imageSrc=<FaAddressCard/>

        mymenu.menuItems.push(mi);

    }
    barData.menuItems.push(mymenu);
}
barData.selectBackground="#33001a"







const wrap=new WrapperSideBar(barData,"root");
wrap.init()
// const  ass=new App({rows:['assa1','assa2','assa3']});
// ReactDOM.render(
//
//     <App rows={['assa1','assa2','assa3']}/>
//
//  ,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

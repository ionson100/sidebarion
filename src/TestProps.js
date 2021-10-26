import {BarData, Head, MenuItem} from "./sidebar/WrapperSideBar";
import {FaAddressBook, FaAddressCard, FaRoute, FaStar} from "react-icons/fa";
import React from "react";

export const imgSize=15;
export   const barData=new BarData();
barData.head=new Head("Просто app",true)
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
    mymenu.tooltip="Простое меню Моя первая кнопка"
    barData.menuItems.push(mymenu);
    {
        const mi=new MenuItem();
        mi.content="wwww1";
        mi.href="/wwww1"
        mi.imageSize=imgSize;
        mi.isShow=true;
        mi.imageSrc="./images/image1.svg"

        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww2";
        mi.href="/wwww2"
        mi.imageSize=imgSize;
        mi.isShow=true;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww3";
        mi.href="/wwww3"
        mi.isShow=true;
        mi.imageSize=imgSize;
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
        mi.content="wwww221";
        mi.href="/wwww221"
        mi.imageSize=imgSize;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww222";
        mi.href="/wwww222"
        mi.imageSize=imgSize;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }


    {
        const mi=new MenuItem();
        mi.content="wwww223";
        mi.href="/wwww223"
        mi.imageSize=imgSize;
        mi.imageSrc=<FaAddressCard/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi=new MenuItem();
        mi.content="Маршрут:";
        mi.href="/wwww221"
        mi.imageSize=imgSize;
        mi.imageSrc=<FaRoute color="red" size={imgSize}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww22";
        mi.href="/wwww22"
        mi.imageSize=imgSize;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }

    {
        const mi=new MenuItem();
        mi.content="wwww23";
        mi.href="/wwww23"
        mi.imageSize=imgSize;
        mi.imageSrc=<FaAddressCard size={imgSize}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi=new MenuItem();
        mi.content="wwww21";
        mi.href="/wwww21"
        mi.imageSize=imgSize;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww22";
        mi.href="/wwww22"
        mi.imageSize=imgSize;
        mi.imageSrc="./images/image1.svg"
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww23";
        mi.href="/wwww23"
        mi.imageSize=10;
        mi.imageSrc=<FaAddressCard size={imgSize}/>

        mymenu.menuItems.push(mi);

    }
    barData.menuItems.push(mymenu);
}

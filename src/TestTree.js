import {BarData, Head, MenuItem} from "./sidebar/WrapperSideBar";
import { BiFolder,BiFolderOpen} from "react-icons/bi";
import React from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { BsCaretRight,BsCaretDown } from "react-icons/bs";
//
export const imgSize=25;


export const imgSizeSm=20;
export const colorImage="#ca981c"
export   const barData=new BarData();
barData.iconTree=<MdSubdirectoryArrowRight size={imgSize} color={colorImage}/>
barData.iconToggleMenu=<FiAlignJustify size={30} color={colorImage}/>
barData.imageToggleNode1=<BsCaretRight size={20} color={colorImage}/>
barData.imageToggleNode2=<BsCaretDown  size={20} color={colorImage}/>

function myHeader(){
 return(<img src="https://ucmrussia.ru/upload/medialibrary/851/851d4df328991d082ec9c66ea5c449f6.png" height={30}/>)
}
barData.head=new Head(myHeader())

{
    const mymenu=new MenuItem();
    mymenu.content="Simple1"
    mymenu.isShow=true;
    mymenu.href="sinple1";
    mymenu.imageSrc=<BiFolder color={colorImage} size={imgSize}/>

    mymenu.imageSize=23;
    barData.menuItems.push(mymenu);
}
{
    const mymenu=new MenuItem();
    mymenu.content= "Simple my Firs Menu"
    mymenu.isShow=true;
    mymenu.href="Просто2";
    mymenu.imageSrc=<BiFolder  color={colorImage} size={imgSize}/>
    mymenu.imageSrcOpen=<BiFolderOpen  color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.tooltip="Simple ny Firs Menu"
    barData.menuItems.push(mymenu);
    {
        const mi=new MenuItem();
        mi.content="content1";
        mi.href="/wwww1"
        mi.imageSize=imgSize;
        mi.isShow=true;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="content2";
        mi.href="/wwww2"
        mi.imageSize=imgSize;
        mi.isShow=true;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="content3";
        mi.href="/wwww3"
        mi.isShow=true;
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);
    }
}
{
    const mymenu=new MenuItem();
    mymenu.content="simple3"
    mymenu.isShow=true;
    mymenu.imageSrc=<BiFolder color={colorImage} size={imgSize}/>
    mymenu.imageSrcOpen=<BiFolderOpen  color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.href="Sinple3";
    {
        const mi=new MenuItem();
        mi.content="Content221";
        mi.href="/wwww221"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="Content222";
        mi.href="/wwww222"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }


    {
        const mi=new MenuItem();
        mi.content="Content223";
        mi.href="/wwww223"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi=new MenuItem();
        mi.content=" My Route";
        mi.href="/wwww221"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="My Route 2";
        mi.href="/wwww22"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }

    {
        const mi=new MenuItem();
        mi.content="MyRoute 3";
        mi.href="/wwww23"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi=new MenuItem();
        mi.content="My Route 4";
        mi.href="/wwww21"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="Content 56";
        mi.href="/wwww22"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="Content 55";
        mi.href="/wwww23"
        mi.imageSize=10;
        mi.imageSrc=<BiFolder color={colorImage} size={imgSizeSm} />

        mymenu.menuItems.push(mi);

    }
    barData.menuItems.push(mymenu);
}


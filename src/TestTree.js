import {BarData, MenuItem} from "./sidebar/WrapperSideBar";
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

//barData.head=new Head("Просто app",true)

{
    const mymenu=new MenuItem();
    mymenu.content="Просто1"
    mymenu.isShow=true;
    mymenu.href="Просто1";
    mymenu.imageSrc=<BiFolder color={colorImage} size={imgSize}/>

    mymenu.imageSize=23;
    barData.menuItems.push(mymenu);
}
{
    const mymenu=new MenuItem();
    mymenu.content= "Моя первая кнопка Моя первая кнопка Моя первая кнопка"
    mymenu.isShow=true;
    mymenu.href="Просто2";
    mymenu.imageSrc=<BiFolder  color={colorImage} size={imgSize}/>
    mymenu.imageSrcOpen=<BiFolderOpen  color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.tooltip="Простое меню Моя первая кнопка"
    barData.menuItems.push(mymenu);
    {
        const mi=new MenuItem();
        mi.content="wwww1";
        mi.href="/wwww1"
        mi.imageSize=imgSize;
        mi.isShow=true;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww2";
        mi.href="/wwww2"
        mi.imageSize=imgSize;
        mi.isShow=true;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww3";
        mi.href="/wwww3"
        mi.isShow=true;
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);
    }
}
{
    const mymenu=new MenuItem();
    mymenu.content="Просто3"
    mymenu.isShow=true;
    mymenu.imageSrc=<BiFolder color={colorImage} size={imgSize}/>
    mymenu.imageSrcOpen=<BiFolderOpen  color={colorImage} size={imgSize}/>
    mymenu.imageSize=23;
    mymenu.href="Просто3";
    {
        const mi=new MenuItem();
        mi.content="wwww221";
        mi.href="/wwww221"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww222";
        mi.href="/wwww222"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }


    {
        const mi=new MenuItem();
        mi.content="wwww223";
        mi.href="/wwww223"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi=new MenuItem();
        mi.content="Маршрут:";
        mi.href="/wwww221"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww22";
        mi.href="/wwww22"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }

    {
        const mi=new MenuItem();
        mi.content="wwww23";
        mi.href="/wwww23"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi=new MenuItem();
        mi.content="wwww21";
        mi.href="/wwww21"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww22";
        mi.href="/wwww22"
        mi.imageSize=imgSize;
        mi.imageSrc=<BiFolder  color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi=new MenuItem();
        mi.content="wwww23";
        mi.href="/wwww23"
        mi.imageSize=10;
        mi.imageSrc=<BiFolder color={colorImage} size={imgSizeSm} />

        mymenu.menuItems.push(mi);

    }
    barData.menuItems.push(mymenu);
}

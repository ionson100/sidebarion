import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import WrapperSideBar, {BarData,Head,MenuItem} from "./sidebar/WrapperSideBar";
import { FaAddressCard,FaAddressBook,FaStar,FaRoute} from 'react-icons/fa';




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
    mymenu.tooltip="Прстое меню Моя первая кнопка"
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
    {
        const mi=new MenuItem();
        mi.content="Маршрут:";
        mi.href="/wwww1"
        mi.imageSize=20;
        mi.imageSrc=<FaRoute color="red" size={20}/>
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


const cont = {
    name: "not selected"

};

barData.on("onclick",(menuitem)=>{
    cont.name=menuitem.href;
    initContent(cont)
})

function  initContent(props){
    const element = (
        <div>
            <h2>{props.name}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('content'));
}



const d=document.getElementById('bt1');
d.onclick=function (){
    {
        const mi=new MenuItem();
        mi.content="Test-22";
        mi.href="/test22"
        mi.imageSize=20;
        mi.imageSrc=<FaRoute color="green"></FaRoute>
        barData.menuItems[1].menuItems.push(mi)
    }

    barData.forceUpdate()
}
const d2=document.getElementById('bt2');
const st={click:true}
d2.onclick=()=>{
    if(st.click){
        barData.openWidth=0;

    }else{
        barData.openWidth=300;
    }
    st.click=!st.click;
    barData.forceUpdate()
};

const d3=document.getElementById('bt3');
d3.onclick=function (){
    barData.menuItems[1].content="Test"
    barData.forceUpdate();
}




barData.closeWidth=70;
barData.openWidth=300;
barData.isOpen=true;
const wrap=new WrapperSideBar(barData,"root");
wrap.init()
initContent(cont)

reportWebVitals();

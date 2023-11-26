import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import WrapperSideBar, {MenuItem} from "./sidebar/WrapperSideBar";
//import { FaRoute} from 'react-icons/fa';,imgSize
 import {barData,imgSizeSm,colorImage} from "./TestTree"
// import {barData,imgSizeSm,colorImage} from "./TestTree"
import './index.css';

import { BiFolder,BiFolderOpen} from "react-icons/bi";
//import "./sidebar/expSide.css"
import "./testMenu.css"


const cont = {
    name: "not selected"
};

barData.on("onclick",(menuitem)=>{
    cont.name=menuitem.href;
    const state = { 'page_id': 1, 'user_id': 5 }
    const title = ''

    window.history.replaceState(state, title, menuitem.href)
    initContent(cont)
    //menuitem.isShow=false;
    //barData.forceUpdate();
})

function  initContent(props){
    const element = (
        <div>
            <h2 className="myClassName">{props.name}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('content'));
}

window.onpopstate = function(event) {
    alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
}



const d=document.getElementById('bt1');
d.onclick=function (){
    {
        const mi=new MenuItem();
        mi.content="Test-22";
        mi.href="/test22"
        mi.imageSize=10;
        mi.imageSrc=<BiFolder size={imgSizeSm} color={colorImage}/>
        mi.imageSrcOpen=<BiFolderOpen size={imgSizeSm} color={colorImage}/>
        {
            const mi1=new MenuItem();
            mi1.content="Test-22";
            mi1.href="/test22"
            mi1.imageSize=20;
            mi1.imageSrc=<BiFolder size={imgSizeSm} color={colorImage}/>;
            mi.imageSrcOpen=<BiFolderOpen size={imgSizeSm} color={colorImage}/>
            mi.menuItems.push(mi1);
        }
        barData.menuItems[1].menuItems.push(mi)
    }

    barData.forceUpdate()
}
const d2=document.getElementById('bt2');
const st={click:true}
d2.onclick=()=>{
    barData.openWidth = st.click ? 0 : 300;
    st.click=!st.click;
    barData.forceUpdate()
};

const d3=document.getElementById('bt3');
d3.onclick=function (){
    barData.menuItems[1].content="Test"
    barData.forceUpdate();
}
const d4=document.getElementById('bt4');
const d5=document.getElementById('bt5');
const d6=document.getElementById('bt6');

d4.onclick=function (){

 document.querySelectorAll('[data-ul]').forEach((e)=>{
     const  id=e.getAttribute('data-ul-id');
     barData.onClickMenu(id)

 })
    //barData.onClickMenu('122')
    //barData.forceUpdate();
}
d5.onclick=function (){
    barData.clearItems()
    barData.forceUpdate()

}
d6.onclick=function (){

    document.querySelectorAll('[data-ul]').forEach((e)=>{
        const  id=e.getAttribute('data-ul-id');
        barData.onClickMenu(id,false)

    })

}





// barData.closeWidth=60;// ширина зарытого
// barData.openWidth=700;// ширина открытого
// barData.isOpen=true;  // состояние  - открыто


barData.closeWidth=60;// ширина зарытого
barData.openWidth=280;// ширина открытого
barData.isOpen=true;  // состояние - открыто
barData.resizeEvent;// событие окончания изменения размера меню
barData.openCloseMenuEvent=function (){

};// событие открытия закрытия меню

/**
 * создаем меню
 */
new WrapperSideBar(barData,"root");

initContent(cont)

reportWebVitals();

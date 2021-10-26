import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import WrapperSideBar, {MenuItem} from "./sidebar/WrapperSideBar";
import { FaRoute} from 'react-icons/fa';
import {barData,imgSize} from "./TestProps"
import './index.css';




const cont = {
    name: "not selected"
};

barData.on("onclick",(menuitem)=>{
    cont.name=menuitem.href;
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



const d=document.getElementById('bt1');
d.onclick=function (){
    {
        const mi=new MenuItem();
        mi.content="Test-22";
        mi.href="/test22"
        mi.imageSize=10;
        mi.imageSrc=<FaRoute size={imgSize} color="green"/>
        {
            const mi1=new MenuItem();
            mi1.content="Test-22";
            mi1.href="/test22"
            mi1.imageSize=20;
            mi1.imageSrc=<FaRoute size={imgSize} color="green"/>;
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




barData.closeWidth=70;// ширина зарытого
barData.openWidth=400;// ширина открытого
barData.isOpen=true;  // состояние  - открыто
/**
 * создаем меню
 */
new WrapperSideBar(barData,"root");

initContent(cont)

reportWebVitals();

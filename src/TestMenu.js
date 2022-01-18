import {BarData, Head, MenuItem} from "./sidebar/WrapperSideBar";
import React from "react";

import {FiAlignJustify} from "react-icons/fi";
import {AiFillBug, AiFillCloud, AiOutlineAndroid, AiOutlineBug, AiOutlineGlobal} from "react-icons/ai";
import {BsCaretDown, BsCaretRight} from "react-icons/bs";

import {IoIosBoat, IoIosBusiness, IoIosAirplane, IoIosAperture, IoIosContacts} from "react-icons/io";
import {Form} from "react-bootstrap";

export const imgSize = 25;

export const imgSizeSm = 20;
export const colorImage = "#ca981c";
export const barData = new BarData();

barData.iconToggleMenu = <FiAlignJustify size={30} color={colorImage}/>
barData.imageToggleNode1 = <BsCaretRight size={20} color={colorImage}/>
barData.imageToggleNode2 = <BsCaretDown size={20} color={colorImage}/>

function myHeader() {
    return (<Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label style={{color: "white"}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label style={{color: "white"}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
    </Form>)
}

barData.head = new Head(myHeader())

{
    const mymenu = new MenuItem();
    mymenu.content = "Menu1"
    mymenu.isShow = true;
    mymenu.href = "sinple1";
    mymenu.imageSrc = <AiFillBug color={colorImage} size={imgSize}/>

    mymenu.imageSize = 23;
    barData.menuItems.push(mymenu);
}
{
    const mymenu = new MenuItem();
    mymenu.content = "Menu2"
    mymenu.isShow = true;
    mymenu.href = "Просто2";
    mymenu.imageSrc = <AiFillCloud color={colorImage} size={imgSize}/>
    mymenu.imageSize = 23;
    mymenu.tooltip = "Simple my First Menu"
    barData.menuItems.push(mymenu);

    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }

}
{
    const mymenu = new MenuItem();
    mymenu.content = "Menu 33"
    mymenu.isShow = true;
    mymenu.imageSrc = <IoIosBusiness color={colorImage} size={imgSize}/>
    mymenu.imageSize = 23;
    mymenu.href = "Sinple3";


    barData.menuItems.push(mymenu);
}
{
    const mymenu = new MenuItem();
    mymenu.content = "Menu 3"
    mymenu.isShow = true;
    mymenu.imageSrc = <IoIosBoat color={colorImage} size={imgSize}/>
    mymenu.imageSize = 23;
    mymenu.href = "Sinple3";


    barData.menuItems.push(mymenu);
}
{
    const mymenu = new MenuItem();
    mymenu.content = "Menu part 56"
    mymenu.isShow = true;
    mymenu.imageSrc = <IoIosAirplane color={colorImage} size={imgSize}/>
    mymenu.imageSize = 23;
    mymenu.href = "Sinple3";


    barData.menuItems.push(mymenu);
}
{
    const mymenu = new MenuItem();
    mymenu.content = "Menu part 3"
    mymenu.isShow = true;
    mymenu.imageSrc = <IoIosAperture color={colorImage} size={imgSize}/>
    mymenu.imageSize = 23;
    mymenu.href = "Sinple3";
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content part 67";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content part 56";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }

    barData.menuItems.push(mymenu);
}
{
    const mymenu = new MenuItem();
    mymenu.content = "Menu part 33"
    mymenu.isShow = true;
    mymenu.imageSrc = <IoIosContacts color={colorImage} size={imgSize}/>
    mymenu.imageSize = 23;
    mymenu.href = "Sinple3";


    barData.menuItems.push(mymenu);

    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }
    {
        const mi = new MenuItem();
        mi.content = "My Route 4";
        mi.href = "/wwww21"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineAndroid color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 56";
        mi.href = "/wwww22"
        mi.imageSize = imgSize;
        mi.imageSrc = <AiOutlineBug color={colorImage} size={imgSizeSm}/>
        mymenu.menuItems.push(mi);
    }
    {
        const mi = new MenuItem();
        mi.content = "Content 55";
        mi.href = "/wwww23"
        mi.imageSize = 10;
        mi.imageSrc = <AiOutlineGlobal color={colorImage} size={imgSizeSm}/>

        mymenu.menuItems.push(mi);

    }

}

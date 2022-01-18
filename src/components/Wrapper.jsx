import React, {useEffect, useState, useContext} from "react";
import {AppContext} from "../js/context";
import {useTranslation} from "react-i18next";
import WrapperSideBar, {MenuItem} from "../sidebar/WrapperSideBar";
import {BiFolder, BiFolderOpen} from "react-icons/bi";
import {barData, colorImage, imgSizeSm} from "../TestMenu";
import Select from "react-select";
import { setCookie } from "../js/methods";
// import { useDispatch } from "react-redux";
const Wrapper = () => {

    const {t, i18n} = useTranslation();
    // const dispatch: any = useDispatch();
    const {lang, setLang} = useContext(AppContext);

    const [cont] = useState({
        name: "not selected"
    });

    const [languages] = useState([
            {
                value: "ru",
                label: "Ру",
            },
            {
                value: "en",
                label: "En",
            },
            {
                value: "es",
                label: "Es",
            }
        ]
    );

    const handleSelectChange = (data) => {
        setCookie('language', data.value, 365);
        setLang(data.value);
    }

    const handleReturnValue = () => {
        let it = { value: "ru", label: "Ру"};
        languages.some(item => {
            if(item.value === lang) {
                it = item;
                return true
            }
        })
        return it;
    }

    const chLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        chLanguage(lang);
        const title = document.getElementById('title');
        title.innerHTML = t("name");
    }, [lang]);

    useEffect(() => {
        /**
         * создаем меню
         */
        new WrapperSideBar(barData, "root");

        barData.closeWidth = 60;// ширина зарытого
        barData.openWidth = 280;// ширина открытого
        barData.isOpen = true;  // состояние  - открыто

        barData.on("onclick", (menuitem) => {
            cont.name = menuitem.href;
            const state = {'page_id': 1, 'user_id': 5}
            const title = ''

            window.history.replaceState(state, title, menuitem.href)
            menuitem.isShow = false;
            barData.forceUpdate();
        })

        const d = document.getElementById('bt1');
        d.onclick = function () {
            {
                const mi = new MenuItem();
                mi.content = "Test-22";
                mi.href = "/test22"
                mi.imageSize = 10;
                mi.imageSrc = <BiFolder size={imgSizeSm} color={colorImage}/>
                mi.imageSrcOpen = <BiFolderOpen size={imgSizeSm} color={colorImage}/>
                {
                    const mi1 = new MenuItem();
                    mi1.content = "Test-22";
                    mi1.href = "/test22"
                    mi1.imageSize = 20;
                    mi1.imageSrc = <BiFolder size={imgSizeSm} color={colorImage}/>;
                    mi.imageSrcOpen = <BiFolderOpen size={imgSizeSm} color={colorImage}/>
                    mi.menuItems.push(mi1);
                }
                barData.menuItems[1].menuItems.push(mi)
            }

            barData.forceUpdate()
        }
        const d2 = document.getElementById('bt2');
        const st = {click: true}
        d2.onclick = () => {
            barData.openWidth = st.click ? 0 : 300;
            st.click = !st.click;
            barData.forceUpdate()
        };
        const d3 = document.getElementById('bt3');
        d3.onclick = function () {
            barData.menuItems[1].content = "Test"
            barData.forceUpdate();
        }
    }, [])

    return (
        <>

            <div id="root" className="menu-wrapper"/>

            <div className="col content-wrapper" style={{background: 'beige'}}>
                <div style={{
                    margin: '15px 4px 10px',
                    width: 80,
                    position: 'absolute',
                    right: 20,
                    top: 5
                }}
                >
                    <Select
                        options={languages}
                        onChange={handleSelectChange}
                        defaultValue={handleReturnValue}
                    />
                </div>
                <div id="content">
                    <h2 className="myClassName">{t("title")}</h2>
                </div>
                <div>
                    <button id="bt1">{t("add_submenu")}</button>
                    <button id="bt2">{t("resize")}</button>
                    <button id="bt3">{t("rename")}</button>
                    <button id="bt4">{t("expand_all")}</button>
                </div>
                <div className="jumbotron jumbotron-fluid ionJumbo" style={{backgroundColor: '#e9ecef'}}>
                    <div className="container">
                        <h1 className="display-4">GRID</h1>
                        <p className="lead">здесь использавать <i>container-fluid</i>, <i>row</i> и <i>column</i></p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Wrapper;

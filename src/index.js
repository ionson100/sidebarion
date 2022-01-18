import React, {useState} from 'react';
import { render } from "react-dom";
import { AppProvider } from "./js/context";

import Wrapper from "./components/Wrapper";
import "./js/i18";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./testMenu.css";
import './index.css';
import {getCookie} from "./js/methods";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw_audio.js", { scope: "/" });
    });
}

// Определение языковой локали
let config = {
    language: "ru",
    country: "RU",
};

let client = window.navigator ? window.navigator.language : config.language;

let language =
    client.search("-") > 0
        ? client.substring(0, client.search("-")).toLowerCase()
        : client.toLowerCase();

// create storage
// store.dispatch(changeLanguage(language));
localStorage.setItem('lng', language);

window.onpopstate = function(event) {
    alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
}

// store.dispatch(changeLanguage(language));

function Main () {

    const [lang, setLang] = useState(
        getCookie('language')
            ? getCookie('language')
            : 'ru'
    );

    return (
        <React.StrictMode>
            <AppProvider value={{lang, setLang}}>
                <Wrapper />
            </AppProvider>
        </React.StrictMode>
    )
}

render(
    <Main />,
    document.getElementById("wrapper")
);

// reportWebVitals();

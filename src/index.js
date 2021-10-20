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


document.getElementById("bt_click").onclick=()=>{
    document.buttons.setState({mymessage:"просто  rtrtrt"})
}
const s=['assa1','assa2','assa3']
ReactDOM.render(
    <Router path="/">
    <App rows={['assa1','assa2','assa3']}/>
    </Router>
 ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

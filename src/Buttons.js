import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRocket,FaAddressCard} from 'react-icons/fa';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


 export  default class Buttons extends React.Component{

     constructor(props) {
         super(props);
         this.state = {
             date: new Date(),
             mymessage:"iusdf"};
         document.buttons=this;
         this.myRef = React.createRef();


     }

     componentDidMount() {

         this.timerID = setInterval(
             () => this.tick(),
             1000
         );
     }

     // componentDidMounе() {
     //
     //     this.timerID = setInterval(
     //         () => this.tick(),
     //         1000
     //     );
     // }

     componentWillUnmount() {
         clearInterval(this.timerID);
     }

     tick() {
        // alert("idosdiosdi")
         this.setState({
             date: new Date()
         });
     }

     render() {

         return (
             <div>
                 <h1>Привет, мир!</h1>
                 <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
                 <div ref={this.myRef} >
                     <h2 ref={this.myRef} >Сейчас {this.state.mymessage}.</h2>
                 </div>;
                 <div>
                     <Link to="/dashboard">
                         <button onClick={()=>{
                             this.myRef.current.innerText="dsdjjjjjjjjjjjjjjjjjjjjjjjj";
                         }}>Increment</button>
                     </Link>

                 </div>
                 <Link to={"./Dashboard2222222222222"}>
                     Dashboard
                 </Link>
                 <Link to="/dashboard333333333333333333">
                 <OverlayTrigger placement="bottom-start" overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>

                 <button className="btn btn-dark " id="tooltip-disabled" type="button" >
                     <FaAddressCard/>

                 </button>

                 </OverlayTrigger>
                 </Link>
             </div>
         );
     }
}
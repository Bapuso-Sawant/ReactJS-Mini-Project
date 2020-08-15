import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//functional based Architecture
const Demo = (props) => {
    return <div className="maindiv_style">
              <h1>Sawant Bapuso {props.name}</h1>
              <p>HELLO ALL</p>
           </div>
}
/*
//Component Based Architecture
class Demo extends Component{
  render(){ //JSX
    return <div className="maindiv_style">
              <h1>Sawant Bapuso {props.name}</h1>
              <p>HELLO ALL</p>
           </div>
  }
}
*/
export default Demo;

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SecondsCounter from "./componete/SecondsCounter";

let counter=0;
setInterval(function(){
  const five = Math.floor(counter/10000);
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  console.log(four,three,two,one);
  counter++;
  ReactDOM.render(
    <React.StrictMode>
      <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} />
    </React.StrictMode>,
    document.getElementById('root')
  );
},1000);;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

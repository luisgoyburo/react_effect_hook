import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Counter from './Counter';
import CounterCleanUpEffects from './CounterCleanUpEffects';
import Timer from './Timer';
//import Forecast from './Forecast';
import Shop from './Shop';
import reportWebVitals from './reportWebVitals';
import SocialNetwork from "./SocialNetwork";

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <CounterCleanUpEffects />
    <Timer />
    {/* <Forecast /> */}
    <Shop />
    <SocialNetwork />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

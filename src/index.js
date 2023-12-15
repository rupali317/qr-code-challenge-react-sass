import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './index.scss';
import Card from './Card';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById("main")).render(<Card />);
ReactDOM.createRoot(document.getElementById("footer")).render(<Footer />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
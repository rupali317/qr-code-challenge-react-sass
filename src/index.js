import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/index.scss";
import { Card } from "./components/Card/index.js";
import { Footer } from "./components/Footer/index.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("main")).render(<Card />);
ReactDOM.createRoot(document.getElementById("footer")).render(<Footer />);

reportWebVitals(console.log);

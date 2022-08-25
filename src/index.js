import React from "react";
import ReactDOM from "react-dom/client";
import ContactApp from "./components/ContactApp";

const element = <h1> Hello World! </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContactApp />);

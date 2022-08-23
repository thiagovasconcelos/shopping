import React from "react";
import "./style.css"
import logo from "../../assets/ecommerce001.png"
export default function Header(props){
return(
    
        <header className="Header">
        <img src={logo} alt="logo" />
        <h1>
            Rock Music Shopping 
        </h1>
      </header>
   
);

}
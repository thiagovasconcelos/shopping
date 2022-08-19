import React from "react";
import "./style.css"
import logo from "../../assets/logo_eco02.png"
export default function Header(props){
return(
    <div>
        <header>
        <img src={logo} alt="logo" />
        <h1>
            Rock Music Shopping 
        </h1>
      </header>
    </div>
);

}
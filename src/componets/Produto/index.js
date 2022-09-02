import React, { useState } from "react";
import "../Produto/style.css"
export default function Produto(props){


return(
    <div>
    <img className="prod" src="https://dummyjson.com/image/i/products/1/1.jpg" alt="iphone9"/>
    <div className="txtProd">
    <h1>title Iphone 9</h1>
    <p>Aparelho cheio de tecnologia</p>
    <p>Preço: 2.000,00</p>
    <p>Avaliação 4,5</p>
    </div>
    </div>
);
}
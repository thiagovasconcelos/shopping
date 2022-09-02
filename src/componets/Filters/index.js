import React from "react";
import Produto from "../Produto";
import "./style.css"
export default function Filters(props){
   const filter = Produto
    
    return(
       
        <div className="sub">
            <nav>
                <a>Menu</a>
                <a>Departamento</a>
                <a>Quem somos</a>
            </nav>
            <div className="filters">   
                <input placeholder="Menor preço" />
                <input placeholder="Maior preço"/>
                <button>Filtrar preço</button>                       
            </div>
            <div className="ordenar">
                <p1>Ordenar: </p1>
                <button>Maior</button>
                <button>Menor</button>
            </div>
        </div>
                  

    );
}
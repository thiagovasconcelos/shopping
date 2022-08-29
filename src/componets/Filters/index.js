import React from "react";
import "./style.css"
export default function Filters(props){
    return(
       
        <div className="sub">
           <nav>
            <a>Menu</a>
            <a>Departamento</a>
            <a>Quem somos</a>
            </nav>
            <div className="filters">  
                <button>Filtrar preço</button>
                <button>Filtrar Categorias</button>
            </div>
        </div>
                  

    );
}
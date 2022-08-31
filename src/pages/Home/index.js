import React, { useEffect, useState } from "react";
import Header from "../../componets/Header/index"
import Filter from "../../componets/Filters/index"
import Footer from "../../componets/Footer/index"
import Produto from "../../componets/Produto";
export default function Home(){
    const [produtos, setProdutos]= useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => setProdutos([...res.products]));
    },[])

    return(
        <>
           <Header/>
           <Filter/>
           <main><Produto/></main>
           <Footer/> 
        </>
    );
}
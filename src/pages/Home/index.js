import React, { useEffect, useState } from "react";
import Header from "../../componets/Header/index"
import Filter from "../../componets/Filters/index"
import Footer from "../../componets/Footer/index"

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
           <main>{JSON.stringify(produtos)}</main>
           <Footer/> 
        </>
    );
}
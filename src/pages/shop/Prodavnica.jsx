import React from "react";
import {PRODUCST, PRODUCTS} from "../../products";
import { Product } from "./Proizvod";
import './prodavnica.css';
export const Shop = () => {
    return(
        <div className = "shop">
            <div className="shopTitle">
             <h1>M&S Satovi i Nakit</h1>
            </div>
            <div className="products">
{PRODUCTS.map((product)=>(
 <Product data={product}/>))}
            </div>
            </div>
    );
} ;
import React, { useContext } from "react";
import {PRODUCTS} from "../../products";
//import {Product} from "../shop/Proizvod";
import { ProizvodiContext } from "../../context/ProizvodiContext";
import {KorpaItem} from './korpa-item';
import "./korpa.css"
export const Cart = () => {
    const{korpaItems}=useContext(ProizvodiContext);
    return (
        <div className="korpa">
            <div><h1> Dodati proizvodi u Vašoj korpi </h1></div>

<div className="korpaItems">
    {PRODUCTS.map((product)=> {
    if(korpaItems[product.id]!=0){
        return <KorpaItem data={product}/>
    }

    })}
</div>

            </div>
    )
}
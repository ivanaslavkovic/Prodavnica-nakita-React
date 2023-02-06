import React, { useContext } from "react";
import {PRODUCTS} from "../../products";
//import {Product} from "../shop/Proizvod";
import { ProizvodiContext } from "../../context/ProizvodiContext";
import {KorpaItem} from './korpa-item';
import { useNavigate } from 'react-router-dom';
import "./korpa.css"
export const Cart = () => {
    const{korpaItems,ukupnoZaPlacanje}=useContext(ProizvodiContext);
    const ukupno = ukupnoZaPlacanje();
    const navigate = useNavigate();
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
{ukupno > 0?
<div className="korpaCheckout">
<p>Ukupno: {ukupno}din</p>
                <button onClick={() => navigate("/")}>Nastavi sa kupovinom</button>
                <button>Plaćanje</button>
</div>
: <h1>Vaša korpa je prazna.</h1>}
            </div>
    )
}
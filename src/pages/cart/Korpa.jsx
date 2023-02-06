import React, { useContext , useState} from "react";
import {PRODUCTS} from "../../products";
//import {Product} from "../shop/Proizvod";
import { ProizvodiContext } from "../../context/ProizvodiContext";
import {KorpaItem} from './korpa-item';
import { useNavigate } from 'react-router-dom';
import "./korpa.css"
import Paginacija from "../../components/Paginacija";

export const Cart = () => {
    const{korpaItems,ukupnoZaPlacanje}=useContext(ProizvodiContext);
    const ukupno = ukupnoZaPlacanje();
    const [currentPage, setCurrentPage] = useState(1);
    
    const navigate = useNavigate();

    const proizvodiKolica = [];
    for (const proizvod of PRODUCTS) {
        if (korpaItems[proizvod.id] !== 0) {
            proizvodiKolica.push(proizvod);
            console.log(proizvod.id);
        }
    }
    const BROJ_PROIZVODA_PO_STRANI = 3;
    const pages = Math.ceil(proizvodiKolica.length / BROJ_PROIZVODA_PO_STRANI);
    const firstIndex = (currentPage - 1) * BROJ_PROIZVODA_PO_STRANI;
    const lastIndex = currentPage * BROJ_PROIZVODA_PO_STRANI;
    const prikazaniProizvodi = proizvodiKolica.slice(firstIndex, lastIndex);


    return (
        <><div className="korpa">
            <div><h1> Dodati proizvodi u Vašoj korpi </h1></div>




            <div className="korpaItems">
                {prikazaniProizvodi.map((product) => {
                    if (korpaItems[product.id] != 0) {
                        return <KorpaItem data={product} />;
                    }

                })}

            </div>
            {ukupno > 0 ?
                <div className="korpaCheckout">
                    <p>Ukupno: {ukupno}din</p>
                    <button onClick={() => navigate("/")}>Nastavi sa kupovinom</button>
                    <button>Plaćanje</button>
                </div>
                : <h1>Vaša korpa je prazna.</h1>}
        </div>
        <Paginacija pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
            
    )
}
import React, { useContext } from 'react';
import { ProizvodiContext } from '../../context/ProizvodiContext';
//import '../styles/korpa.css';

export const KorpaItem=(props)=>{
    const{id,naziv,cena,slika}=props.data;
    const { korpaItems, dodajUKorpu, izbrisiIzKorpe } = useContext(ProizvodiContext);


    return <div className="korpaItem">
<img src={slika}/>
<div className="opis">
    <p>
        <b>{naziv}
        </b>
    </p>
    <p> {cena}din</p>
<div className="kolicinaHandler">
<button onClick={() => izbrisiIzKorpe(id)}> - </button>
     <input value={korpaItems[id]} />
<button onClick={() => dodajUKorpu(id)}> + </button>
</div>

</div>
    </div>
};
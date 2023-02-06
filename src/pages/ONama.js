import React from 'react'
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import useToggle from '../components/useToggle';
import oNama from '../assets/onama.png';
import '../pages/ONamaC.css';

function ONama() {


  const [toggleTab, setToggleTab] = useToggle(1);

    return (
      <Fragment>
        <section>
          <div className='oNama'>

            <div className='oNamaLeftColumn'
              style={{ backgroundImage: `url(${oNama})` }}>      
            </div>

            <div className='oNamaRightColumn'>
              
              {/* kartice sa nazivima tabova */}
              <div className='tabs'>
                <div className={toggleTab === 1 ? 'singleTab activeTab' : 'singleTab'} onClick={() => setToggleTab(1)}>
                  <h3>O nama</h3>
                </div>

                 {/*<div className={toggleTab === 2 ? 'singleTab activeTab' : 'singleTab'} onClick={() => setToggleTab(2)}>
                  <h3>Naš angažman</h3>
    </div> */}

                <div className={toggleTab === 2 ? 'singleTab activeTab' : 'singleTab'} onClick={() => setToggleTab(2)}>
                  <h3>Gde nas možete naći</h3>
                </div>     
              </div>

              {/* body svakog taba */}
              <div className='tabContent'>

                {/* sadrzaj O nama */}
                <div className={toggleTab === 1 ? 'content activeContent' : 'content'}>
                  <h3>Čime se bavimo?</h3>
                  <p>
                  M&S d.o.o. je privatna kompanija koja se bavi maloprodajom i veleprodajom ručnih satova i nakita kao i trgovinom zlatnog nakita iz sopstvene proizvodnje. 
                  Osnovana 1999.godine od strane porodice Jokić koja se do tada uspešno bavila proizvodnjom i trgovinom zlatnog nakita.
                  </p>
                  <p>
                  Kao prirodan razvoj poslovanja sa sektora zlata na sektor satova, dovodi do osnivanja firme M&S d.o.o. marta 1999.godine. 
                  Od svog početka, kompanija je izgradila čvrstu poziciju na rastućem tržištu. U tom procesu, M&S d.o.o. postaje jedan od najvećih uvoznika 
                  i prodavaca vodećih brandova i nudi širok asortiman proizvodnih kategorija od ručnih časovnika i nakita do kutija za navijanje automatskih satova 
                  i pribora za pisanje. Danas je M&S d.o.o. osim po proizvodnji i prodaji zlatnog nakita, poznata i po raznovrsnom portfoliu međunarodnih brendova i 
                  po svojoj prostranoj maloprodajnoj mreži na teritoriji Srbije, Crne Gore i Makedonije.
                  </p>
                </div>

                {/* sadrzaj Naš angažman */}
                {/*<div className={toggleTab === 2 ? 'content activeContent' : 'content'}>
                  <h3>Sajmovi</h3>
                  <p>
                    Svake godine organizujemo sajmove širom Srbije - ove godine je na redu Gornji Milanovac! Na našim sajmovima se možete upoznati sa
                    proizvođačima i sa njihovim ponudama, a možete obezbediti i omiljene proizvode po promotivnim cenama. Svaki sajam završavamo predavanjima
                    stručnjaka iz oblasti baštovanstva i dizajna eksterijera. U razgovoru sa njima možete da saznate koji su vodeći trendovi u uređenju dvorišta
                    i kako ih možete prilgaoditi sopstvenom ukusu.
                  </p>

                  <h3>Bašte</h3>
                  <p>
                    Najlepše je videti kako naši proizvodi upotpunjavaju vaše vaše bašte! Svake godine otvaramo konkurs gde se možete prijaviti i 
                    pokazati nam kako se Milsan proizvodi uklapaju u Vašu viziju. Pratite obaveštenja kako ne biste propustili šansu da osvojiti vredne nagrade!
                  </p>
</div>*/}

                {/* sadrzaj  */}
                <div className={toggleTab === 2 ? 'content activeContent' : 'content'}>
                  <h3>Gde nas možete pronaći?</h3>
                  <p>
                    Ušetajte u jednu od mnogobrojnih zlatara u Kragujevcu, Nišu, Somboru, Valjevu Zrenjaninu! <br/> Tu smo za Vas svakog radnog dana 
                    od 8 do 20 časova. <br/>Na raspologanju Vam stoji ljubazno osoblje spremno da Vas uputi i olakša Vašu kupovinu.
                  </p>
                  <p>
                    Imate pitanje za nas? Pozovite nas na 0651254789
                    <Link to='/kontakt' style={{ textDecoration: 'none' }}>
                      <button>Ili nam pišite!</button>
                    </Link>
                  </p>
                </div>

              </div>

            </div>
          
            </div>
          </section>
        </Fragment>
  )
}

export default ONama
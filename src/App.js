import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/navbar';
import Footer from './components/Footer';
import {Shop} from './pages/shop/Prodavnica'
import {Cart} from './pages/cart/Korpa'
import { ProizvodiContextProvider } from './context/ProizvodiContext';
import Kontakt from './pages/Kontakt';


function App() {
  return (
    <div className="App">
      <ProizvodiContextProvider>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/kontakt"  element={<Kontakt />} />
      </Routes>
      <Footer/>
     </Router>
     </ProizvodiContextProvider>
    </div>
  );
}

export default App;

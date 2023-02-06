import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Shop} from './pages/shop/Prodavnica'
import {Cart} from './pages/cart/Korpa'
import { ProizvodiContextProvider } from './context/ProizvodiContext';
function App() {
  return (
    <div className="App">
      <ProizvodiContextProvider>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </Router>
     </ProizvodiContextProvider>
    </div>
  );
}

export default App;

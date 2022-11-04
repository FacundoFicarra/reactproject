import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BodyApp from './components/BodyApp.jsx';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Checkout from "./components/Checkout";
import ItemDetailContainer from './components/ItemDetailContainer';


export default function App() {
  
  return ( 
  <>
    {/*<Navbar></Navbar>*/}
    {/*<ItemListContainer greeting={true}></ItemListContainer>*/}


    <BrowserRouter>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
      <Navbar />
      {/* ACA DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/Checkout" element={<Checkout></Checkout>} />
        <Route path="/category/:idcategory" element={<ItemListContainer></ItemListContainer>}/>
        <Route path="/item/:iditem" element={<ItemDetailContainer></ItemDetailContainer>}/>
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
    </BrowserRouter>
    {/*aca termina lo de la ultima clase de react-router-dom*/}

{/*ARREGLAR NAVEGACION y hacer la tarea */}
    <BodyApp></BodyApp>
    <Footer />
  </>
  );
}



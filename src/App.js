import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BodyApp from './components/BodyApp.jsx';
import Footer from './components/Footer';
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from './components/CartWidget';


export default function App() {
  function saludar (){
    alert("HOLA CHIQUES")
  }

  function funcionLogin() {
    alert("algo importante del login")
  }
  
  return ( 
  <>
    
    <Navbar></Navbar>
    <BodyApp></BodyApp>
    
    <Footer></Footer>
  </>
  );
}



import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BodyApp from './components/BodyApp.jsx';
import Footer from './components/Footer';
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from './components/CartWidget';


export default function App() {
  
  return ( 
  <>
    
    <Navbar></Navbar>
    <ItemListContainer greeting={true}></ItemListContainer>
    <BodyApp></BodyApp>
    <Footer></Footer>
  </>
  );
}



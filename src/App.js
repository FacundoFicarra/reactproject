import './App.css';
import BodyApp from './components/BodyApp.jsx';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

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



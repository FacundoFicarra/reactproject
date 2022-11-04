import React,{useEffect,useState} from 'react'
//import Items from './components/Items.jsx'
import gorilla_arms from '../images/gorilla_arms.png'
import sandevistan from '../images/sandevistan.png'
import mantis_blade from '../images/mantis_blade.png'
import Items from "../components/Items.jsx"
import { Link } from 'react-router-dom'
//arreglar estas tres imagenes, no se muestran en la pagina
export default function ItemList({productos}) {

    const Productos = [
        {id:1,category:"militar" ,tittle:"sandevistan", description:"Implante vertebral",priceURL:50000, pictureURL:sandevistan},
        {id:2,category:"militar" ,tittle:"mantis blade", description:"Brazos de mantis filosos", priceURL:20000, pictureURL:gorilla_arms},
        {id:3,category:"comun" ,tittle:"gorilla_arms", description:"Implantes de acero duro para los brazos y manos", price:27000, pictureURL:mantis_blade}        
    ];


    const[Catalogue, setCatalogue] = useState([])

    useEffect(()=>{
        const fetching = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(Productos)
            },2000)
        })
        fetching.then(res =>{
            setCatalogue(res)
        })
        .catch((err)=>console.log(err))
    },[])


    return (<div style={{border:"2px solid blueviolet", backgroundColor:"black"}}>
        {!productos.length && "Loading..."}
          {productos.map((item) => (
            <Items item={item}></Items>
          ))}
          </div>
        /*
        Catalogue.map(item=>{
            return <div key={item.id}>
                <Items tittle={item.tittle} 
                description={item.description} 
                picture={item.pictureURL} 
                id={item.id} 
                price={item.price}>
                </Items></div>
        })*/
    )
}
/* <div key={item.id}>
    {JSON.stringify(item)}
    <LINK to=""
 
</div> */
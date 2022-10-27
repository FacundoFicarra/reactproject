import React,{useEffect,useState} from 'react'
//import Items from './components/Items.jsx'
import gorilla_arms from '../images/gorilla_arms.png'
import sandevistan from '../images/sandevistan.png'
import mantis_blade from '../images/mantis_blade.png'
import Items from "../components/Items.jsx"
//arreglar estas tres imagenes, no se muestran en la pagina
export default function ItemList() {

    const Productos = [
        {id:1, tittle:"sandevistan", description:"Implante vertebral",price:50000, picture:sandevistan},
        {id:2, tittle:"mantis blade", description:"Brazos de mantis filosos", price:20000, picture:gorilla_arms},
        {id:3, tittle:"gorilla_arms", description:"Implantes de acero duro para los brazos y manos", price:27000, picture:mantis_blade}        
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


    return (
        Catalogue.map(item=>{
            return <div key={item.id}><Items tittle={item.tittle} description={item.description} picture={item.pictureURL} id={item.id} price={item.price}></Items></div>
        })
    )
}

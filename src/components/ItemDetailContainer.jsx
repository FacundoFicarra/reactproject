import React,{useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ItemCount from './ItemCount'
import gorilla_arms from '../images/gorilla_arms.png'
import sandevistan from '../images/sandevistan.png'
import mantis_blade from '../images/mantis_blade.png'
export default function ItemDetailContainer() {
const { iditem } = useParams()

const [producto,setProductos] = useState({})


let productosHC = [
  {id:100, name:"sandevistan",category:"militar",precio:100, pictureURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2W8vTgkRqO2j7O_XCdU6UHhYlirs3JOe4Q&usqp=CAU"},
  {id:101, name:"Weapon hand",category:"militar",precio:200,},
  {id:102, name:"mantis blade",category:"comun",precio:400, pictureURL:mantis_blade},
  {id:103, name:"gorilla_arms",category:"comun",precio:500, pictureURL:gorilla_arms},
]



useEffect(()=>{
    const productoPromise = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productosHC.find((item)=>item.id == iditem))
        }, 2000)
    })
    
    productoPromise.then((res)=> {
        setProductos(res)
    });
  }, [iditem]);



    return  (<>
        <div style={{display:"flex", alignItems:"center", flexDirection:"column", border:"2px solid blueviolet", backgroundColor:"black", color:"white"}}>{
          producto.id && <>
          <picture>
            <img src={producto.pictureURL}></img>
          </picture>
          
          {producto.id + " " 
          + producto.name + " " 
          + producto.category + " " 
          + producto.precio}
          <div>
          <ItemCount></ItemCount></div></>}
        </div>
        </>
      );
    }



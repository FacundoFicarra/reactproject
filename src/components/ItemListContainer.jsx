import React,{useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
export default function ItemListContainer() {

const {idcategory} = useParams()

const [productos,setProductos] = useState([])
let productosHC = [
    {id:100, name:"sandevistan",category:"militar",precio:100},
    {id:101, name:"Weapon hand",category:"militar",precio:200},
    {id:102, name:"mantis blade",category:"comun",precio:400},
    {id:103, name:"gorilla_arms",category:"comun",precio:500},
]



useEffect(()=>{
    const productosPromise = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productosHC)
        },2000)
    })
    
    productosPromise.then((res)=> {
        if(idcategory){
            setProductos(res.filter((item)=>item.category==idcategory))
        }else{
            setProductos(res)
        }
    });
  }, [idcategory]);



    return  (
        <div style={{backgroundcolor:"green", border:"2px solid green"}}>
          <ItemList productos={productos} ></ItemList>
        </div>
      );
    }



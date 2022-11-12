import React,{useContext} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import {contextoGeneral} from "../components/ContextContainer"

export default function Item({item}) {
    const {darkMode,setdarkMode} = useContext(contextoGeneral)
    return (
    <><div style={{border:"2px solid black", margin:"1rem", /*color:"red" */color:darkMode? "white":"black",backgroundColor:darkMode?"black":"white"}} key={item.id}>
        {JSON.stringify(item)}
        <Link to ={"/item/" + item.id}>ir al item</Link>
        <br />
        <br />
        <button onClick={()=>setdarkMode(!darkMode)}> CAMBIAR A DARK MODE</button>
    </div>

    {/*export default function Item({tittle, picture, id, price,description})


        return(
    <section className='contenedor'>
        <div className='productos'>
            <div>
                <h2>{tittle}</h2>
                <img src={picture} alt={tittle} width="250rem"></img>
                <p>{description}</p>
                <p>${price}</p>
                <button id={id}>agregar al carrito</button>
            </div>
        </div>
    </section> 
    )*/
    
    /*export const contextoGeneral = createContext();

<contextoGeneral.Provider value={{ darkMode, setdarkMode, x, algo }}>
*/
}
    
    </>
    )
}

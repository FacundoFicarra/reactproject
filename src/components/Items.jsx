import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Item({item}) {
    return (
    <><div style={{border:"2px solid black", margin:"1rem", color:"red"}} key={item.id}>
        {JSON.stringify(item)}
        <Link to ={"/item/" + item.id}>ir al item</Link>
        <br />
        <br />
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
    )*/}
    </>
    )
}

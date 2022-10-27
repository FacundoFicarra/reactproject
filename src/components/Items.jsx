import React from 'react'

export default function Item({tittle, picture, id, price,description}) {
    return (
    <>
        <h2>{tittle}</h2>
        <img src={picture} alt={tittle} ></img>
        <p>{description}</p>
        <p>${price}</p>
        <button id={id}>agregar al carrito</button>
    </>
    )
}

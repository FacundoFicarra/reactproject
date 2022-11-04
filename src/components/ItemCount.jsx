import React from 'react'

export default function ItemCount() { 
  const [contador, setCont] = React.useState(0);
  const stock = 10
  return (
    <div style={{display:"flex"}}>
        <button onClick={()=> setCont(contador - 1)}>-1</button>  
        <p style={{backgroundColor:"black", color:"white"}}>CARGA DEL CARRITO: {(contador)}</p>
        <button onClick={() => (contador<stock) ? setCont(contador+1) : alert('you exceeded the stock punky.')}>+1</button>
      </div>
  )
}

import React from 'react'
import ItemListContainer from './ItemListContainer';

export default function BodyApp() {
    
  const [contador, setCont] = React.useState(0);
  const stock = 10
  return (
    <div style={{backgroundColor: "red", textAlign:"center"}} classname="App">
      
      <div style={{display:"flex"}}>
        <button onClick={()=> setCont(contador - 1)}>-1</button>  
        <p style={{backgroundColor:"black", color:"white"}}>CARGA DEL CARRITO: {(contador)}</p>
        <button onClick={() => (contador<stock) ? setCont(contador+1) : alert('you exceeded the stock punky.')}>+1</button>
      </div>
      
      <ItemListContainer greeting={true}></ItemListContainer>
      <h1 > The inn of the cyber-deads</h1>
      <h2 > What ar u looking 4?</h2>
      <img src="https://www.neondystopia.com/wp-content/uploads/2014/11/netrunner.jpg"></img>
    </div>
  )
}

import React,{useState} from 'react'


export default function ItemListContainer({greeting}) {
/*

//al contador ponerlo en un "ItemCount.jsx" y poner contador +1 y contador -1, que no supere el stock disponible, mirar clase5 del drive

            <button onClick={()=>{
    cont = cont +1
    setCont(cont+1)}}>sumar al contador: {{cont}}</button>
*/


    return greeting ? (
        <>
        <div style={{textAlign: "center", backgroundColor: "black", color:"red"}}>
            <h2>Welcome Runner!</h2>
        </div>
        
        </>
    ) : (
        <div style={{textAlign: "center", backgroundColor:"red", color:"black"}}>
            <h2>Go away!</h2>
        </div>
    )
}



/*
function ({greeting})
return(
    <div style={}>
        greeting
    </div>
)*/


/*HACER EL GREETING Y LANDING
Respecto a la prop "greeting", será nada más una prop con ese nombre (greeting)-->
        <--que enviaremos un string al ItemListContainer.
El "Landing" se refiere al ItemListContainer, que mostrará nuestros productos más adelante. 
Pero por ahora mostrará nada más lo que recibiremos por la prop "greeting".

*/
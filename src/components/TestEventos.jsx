import React from 'react'

export default function TestEventos() {
    console.log("TESTESTESTSETSETSETSETEST")

    function handleclickP(e){
        console.log("se hizo el click")
        console.log(e)
        console.log(e.nativeEvent)
    }
    function handleWindowResize(){

    }

    window.addEventListener("resize",handleWindowResize)
    document.getElementById("button").addEventListener("resize",handleWindowResize)
    window.addEventListener("resize",handleWindowResize)
  return (
    <div>
        <p onClick={()=>{handleclickP}}>probar click</p>
        <div onClick={()=>{handleclickP}}>probar click</div>
    </div>
  )
}


/*  import React, { useState } from "react";

export default function TestEventos() {
  const [tel, setTel] = useState("+5411 - 911332423");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  function handleKeyDownTel(e) {
    //console.log(e);
    //e.preventDefault();
  }

  console.log(tel);

  return (
    <>
      Nombre:
      <input type="text" />
      Email:
      <input type="text" />
      tel:
      <input
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        onKeyDown={handleKeyDownTel}
        type="text"
      />
    </>
  );
}
  */
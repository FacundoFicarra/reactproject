import React from 'react'

export default function BodyApp() {
    function handleOnClick(){
        alert("increible hicieron un click");
      }
      let nosotros = 79;
  return (
    <div style={{backgroundColor: "red"}}classname="App" onClick={handleOnClick}>
        hola chicos somos: {nosotros}
      <h1> E-COMMERCE BASE</h1>

      <h2> ¿Are u net-runner?</h2>
      <p> <img src="https://www.neondystopia.com/wp-content/uploads/2014/11/netrunner.jpg"></img></p>
    </div>
  )
}

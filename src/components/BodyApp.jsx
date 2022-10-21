import React from 'react'

export default function BodyApp() {
    function handleOnClick(){
        alert("increible hicieron un click");
      }
  return (
    <div style={{backgroundColor: "red", textAlign:"center"}} classname="App" onClick={handleOnClick}>
      <h1 > The inn of the cyber-deads</h1>
      <h2 > What ar u looking 4?</h2>
      <img src="https://www.neondystopia.com/wp-content/uploads/2014/11/netrunner.jpg"></img>
    </div>
  )
}

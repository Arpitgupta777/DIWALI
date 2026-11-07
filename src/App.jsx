import React from "react";
import './App.css' 

export function Soundbtn(){

   const playSound = ()=>{
  const audio = new Audio('/sounds/boom.mp3');
  audio.currentTime = 0;
  audio.play().catch((err)=>{
    console.error("failed",err);
  }); 
};
    return(
      <button onClick={playSound}>
        Select
      </button>
    )
}

function App(){
  return(
    <>
    <div className="container">
      <div className="box">
        <img src="https://img.magnific.com/premium-psd/diwali-firecracker-transparent-background_1324646-267.jpg?w=2000"></img>
        <Soundbtn />      
      </div>
      <div className="box">
        <img src="https://img.magnific.com/premium-psd/diwali-firecracker-transparent-background_1324646-267.jpg?w=2000"></img>
        <Soundbtn />
      </div>
    </div>
    </>
  )
}

export default App;


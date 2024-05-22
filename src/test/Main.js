import React, { useState } from 'react'

export default function Main() {
  
    const [color,setColor]=useState("red")
    
    const colors=["red","green","yellow"]

    let count=0

    const handelColor=()=>{
        if(count<3){
            setColor(colors[count])
            count++
        }else{
            count=0
            setColor(colors[count])
        }
    }


    return (
    <div style={{height:"100vh",background:color}}>Main
    
    <button onClick={handelColor}>change</button>

    </div>
  )
}

import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
  const [value,setValue]=useState(0);
  useEffect(()=>{
    console.log("UseEffect has been called")
    document.title =`The Value in side useeffect is : ${value}`
  },[value])

  return (
    <div>
        <p>value : {value}</p>
        <button onClick={()=>setValue(Math.random()*100)}>Click to Random</button>
    </div>
  )
}

export default BasicEffect
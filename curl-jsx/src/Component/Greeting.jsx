import React from 'react'

const Greeting = () => {
    const name = "Abdul Karim";
    const today = Date();
  return (
    <div>
        <h1>Hello , {name}</h1>
        <p>Today is : {today}</p>
    </div>
  )
}

export default Greeting
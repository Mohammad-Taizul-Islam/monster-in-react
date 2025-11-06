import React from 'react'
import { FaBeer } from 'react-icons/fa';


const IconComponent = () => {
  return (
    <h1 >
        <FaBeer />
        <FaBeer size={20} />
        <FaBeer  size={30} color='gold'/>
    </h1>
  )
}

export default IconComponent
import React from 'react'
import '../Style/Die.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Die = ({face,rolling}) => {
  return (
    <div>
       <FontAwesomeIcon icon={['Fas',`fa-dice-${face}`]} className={`Die ${rolling && 'Die-shaking'}`}/>
    </div>
  )
}

export default Die
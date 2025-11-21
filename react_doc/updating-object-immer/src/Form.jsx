import React from 'react'
import { useImmer } from 'use-immer'

const Form = () => {
    const[person,updatePerson]=useImmer({
        name : 'Niki de Saint Phalle',
        artwork:{
            title : 'Blue Nana',
            city : 'Hamburg',
            image : 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })
  return (
    <div>
        {

        }
    </div>
  )
}

export default Form
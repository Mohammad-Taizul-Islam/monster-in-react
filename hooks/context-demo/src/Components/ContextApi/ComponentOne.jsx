import React from 'react'

import { Data} from '../../App'
import { Data1 } from '../../App'


const ComponentOne = () => {
  return (
    <Data.Consumer >
        {
            (name)=>{
                // 
              return (
                  <Data1.Consumer>
                    {
                        (age)=>{
                            return <h1>My Name Is : {name} and I'm {age} years old</h1>
                        }
                    }
                </Data1.Consumer>
              )
            }
        }
    </Data.Consumer>
  )
}

export default ComponentOne
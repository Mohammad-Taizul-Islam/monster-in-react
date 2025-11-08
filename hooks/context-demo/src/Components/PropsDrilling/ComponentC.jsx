import React from 'react'
import ComponentD from './ComponentD'
const ComponentC = ({name}) => {
  return (
    <div>
        <ComponentD name={name} />
    </div>
  )
}

export default ComponentC
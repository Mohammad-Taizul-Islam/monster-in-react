import React from 'react'

const User = ({user}) => {
  return (
    <div>
        {user && user.name}
        {user && user.age >= 18 && <p>Adult User</p> }
    </div>
  )
}

export default User
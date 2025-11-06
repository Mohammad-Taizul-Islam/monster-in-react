import React from 'react'

const UserList = () => {
    const user =[
        {id:1, name:"Tuli",age:23},
        {id:2,name:"Habu",age:44},
        {id:3,name:"popy",age:45},
        {id:4,name:"Dobi",age:22}
    ]
  return (
    <div>
         <h1>User Details</h1>
        {
           
            user.map((user)=>(
                <ul key={user.id}>
                    <li>{user.id} </li>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default UserList
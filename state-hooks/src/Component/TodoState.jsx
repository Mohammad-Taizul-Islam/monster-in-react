import React, { useState } from 'react'

const TodoState = () => {
    const [friends,setFriends]=useState(['Anu','Kabir']);
    const addOneFriend = () => setFriends([...friends,"Ponir"])
  return (
    <div>
       <ul>
        {
            friends.map((friend,index)=>(
                <li key={index}>{friend}</li>
            ))
        }
       </ul>
        <button onClick={addOneFriend}>Add New Friend</button>
    </div>
  )
}

export default TodoState
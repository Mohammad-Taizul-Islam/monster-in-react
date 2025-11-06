import React from 'react'

const Message = ({messages}) => {
  return (
    <div>
        {
            messages.length > 0 && (
                <div>
                    <h3>Messages</h3>
                    <ul>
                        {
                            messages.map((msg,index)=>(
                                <li key={index}>{msg}</li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    </div>
  )
}

export default Message
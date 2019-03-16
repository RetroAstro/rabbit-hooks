import React, { useState, useEffect, useRef } from 'react'

// This one always captures particular rendered values.
function Message() {
   const [message, setMessage] = useState('')

   const showMessage = () => {
     alert('You said: ' + message)
   }
 
   const handleSendClick = () => {
     setTimeout(showMessage, 3000)
   }
 
   const handleMessageChange = (e) => {
     setMessage(e.target.value)
   }
 
   return (
     <>
       <input value={message} onChange={handleMessageChange} />
       <button onClick={handleSendClick}>Send</button>
     </>
   )
}

// This one could get the latest state.
// Because of useEffect, it also ensures that our mutation doesn’t break features like Time Slicing and Suspense. 
function MessageCurrent() {
  const [message, setMessage] = useState('')
  const latestMessage = useRef('')

  useEffect(() => {
    latestMessage.current = message
  }, [message])

  const showMessage = () => {
    alert('You said: ' + latestMessage.current)
  }

  const handleSendClick = () => {
    setTimeout(showMessage, 3000)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <>
      <input value={message} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
    </>
  )
}

export default Message

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Counter = () => {
   const [count, setCount] = useState(0)

   useEffect(() => {
      document.title = count
   }, [count])

   return (
      <>
         <div>You clicked {count} times.</div>
         <Button
            onClick={() => setCount(count + 1)}
         />
      </>
   )
}

const Button = styled.button`
   width: 50px;
   height: 30px;
   background: orange;
   border: none;
   border-radius: 4px;
`

export default Counter

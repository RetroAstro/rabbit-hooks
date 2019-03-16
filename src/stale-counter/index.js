import React, { useState, useEffect } from 'react'

// if the initial state is the result of an expensive computation
const expensiveComputation = () => 0

// the count variable will always be 1
// because useEffect only runs once when Counter mounted
// to fix the bug, we have two solutions 
function Counter() {
   const [count, setCount] = useState(expensiveComputation)
 
   useEffect(() => {
     const id = setInterval(() => {
       setCount(count + 1)
       // fix one
       // setCount(count => count + 1)
     }, 1000)
     return () => clearInterval(id)
   }, []
      // fix two
      // [count]
   )

   return <h1>{count}</h1>
 }

export default Counter

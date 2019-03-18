import React, { useContext } from 'react'

const Counter = ({ context }) => {
   const [state, dispatch] = useContext(context)
   return (
      <div>
         <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
         <span>{state.count}</span>
         <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
   )
}

export default Counter

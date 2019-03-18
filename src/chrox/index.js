import React, { useReducer } from 'react'

export default function createChrox(reducer, initialState) {
   const Context = React.createContext(null)

   const Provider = props => (
      <Context.Provider value={useReducer(reducer, initialState)}>
         {props.children}
      </Context.Provider>
   )

   return {
      Context,
      Provider
   }
}

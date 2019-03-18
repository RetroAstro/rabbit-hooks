import React from 'react'
import { render } from 'react-dom'

import StaleCounter from './stale-counter'
import ReducerCounter from './reducer-counter'
import Interval from './interval'
import Profile from './profile'
import Message from './message'

import createChrox from './chrox'
import { countReducer, initialState } from './chrox/test'
import Counter from './chrox/Counter'

const { Context, Provider } = createChrox(countReducer, initialState)

const App = () => <Counter context={Context} />

render(
   <Provider>
     <App />
   </Provider>,
   document.getElementById('root')
)

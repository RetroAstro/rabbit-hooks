import React from 'react'
import { render } from 'react-dom'

import StaleCounter from './stale-counter'
import ReducerCounter from './reducer-counter'
import Interval from './interval'
import Profile from './profile'
import Message from './message'

const App = () => <Message />

render(
   <App />,
   document.getElementById('root')
)

import React from 'react'
import { render } from 'react-dom'

import Counter from './counter'
import Interval from './interval'
import Profile from './profile'
import Message from './message'

const App = () => <Message />

render(
   <App />,
   document.getElementById('root')
)

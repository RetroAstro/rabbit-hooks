import React from 'react'
import { render } from 'react-dom'

import Counter from './counter'
import Interval from './interval'
import Profile from './profile'

const App = () => <Profile />

render(
   <App />,
   document.getElementById('root')
)

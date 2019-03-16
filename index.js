import React from 'react'
import { render } from 'react-dom'

import Counter from './rabbit/Counter'
import Interval from './rabbit/Interval'

const App = () => <Interval />

render(
   <App />,
   document.getElementById('root')
)

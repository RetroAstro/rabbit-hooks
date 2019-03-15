import React from 'react'
import { render } from 'react-dom'

import Counter from './rabbit/Counter'

const App = () => <Counter />

render(
   <App />,
   document.getElementById('root')
)

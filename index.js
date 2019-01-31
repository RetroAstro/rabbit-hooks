import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
    <div>
        <p>A waterfall created by react-hooks.</p>
        <style jsx>{`
            p {
                color: orange;
                font-size: 16px;
            }
        `}</style>
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

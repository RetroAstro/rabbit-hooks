import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
    <div>
        <p>A waterfall create by react-hooks.</p>
        <style jsx>{`
            p {
                color: orange;
            }
        `}</style>
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

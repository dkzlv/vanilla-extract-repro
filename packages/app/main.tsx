import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from 'ui'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Button>I should be red</Button>
    </React.StrictMode>
)

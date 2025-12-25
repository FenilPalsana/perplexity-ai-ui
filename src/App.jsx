import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-6">
        <card className="p-4">
          <button>shadcn UI working</button>
        </card>
      </div>
    </>
  )
}

export default App

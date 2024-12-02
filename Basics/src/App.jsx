import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between'>
        <div className='bg-blue-300'>Child 1</div>
        <div className='bg-blue-500'>Child 2</div>
        <div className='bg-blue-900'>Child 3</div>
      </div>
    </>
  )
}

export default App

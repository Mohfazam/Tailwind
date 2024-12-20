import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='bg-blue-300 col-span-5'>Child 1</div>
        <div className='bg-blue-500 col-span-5'>Child 2</div>
        <div className='bg-blue-900 col-span-2'>Child 3</div>
      </div>
    </>
  )
}

export default App

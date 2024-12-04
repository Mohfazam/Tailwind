import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='sm:flex sm:justify-center'>
        <div className='bg-green-300 text-orange-600'>Child 1</div>
        <div className='bg-red-50 text-violet-900'>Child 2</div>
        <div className='bg-yellow-300 text-pink-600'>Child 3</div>
      </div>
    </>
  )
}

export default App
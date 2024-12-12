import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <div className={`h-screen ${darkMode ? 'bg-white' : 'bg-black'} `}>
      <button onClick={() => setdarkMode(!darkMode)} className={`${darkMode ? 'text-black' : 'text-white'}`}>Toggle</button>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <div className={`h-screen ${darkMode ? 'bg-white' : 'bg-black'} `}>
      <button onClick={() => setdarkMode(!darkMode)} className={`${darkMode ? 'text-black' : 'text-white'} `}>Toggle</button>
    </div>
  )
}

export default App

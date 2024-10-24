import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='flex-col'>
        <div class='hover:animate-pulse bg-gradient-to-r from-teal-500 to-green-500 p-5'>
          <p class='text-7xl'>kanab.top</p>
          <br></br>
          <p class='text-xl'>"des développeurs un peu foncedés<br></br>avec des projets opensource débiles"</p>
          <br></br>
          <button>GitHub</button>
        </div>
      </div>
    </>
  )
}

export default App

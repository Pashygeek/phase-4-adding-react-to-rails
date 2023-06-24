import React, { useEffect } from 'react'

function App() {
  useEffect(()=> {
    fetch("/movies")
    .then((r)=> r.json())
    .then((movies)=> console.log(movies))
  }, [])
  return (
    <div>Hello Can you see Movies?!Check in the console</div>
  )
}

export default App

import { useState } from 'react'


function App() {
  const [str, setStr] = useState('test1')
  

  return (
    <>
      <h1>{str}</h1>
      <div onClick={handleClick}></div>
    </>
  )
}

export default App

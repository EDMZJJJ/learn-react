import { useState } from 'react'


function App() {
  const [str, setStr] = useState('test1')

  const handleClick=()=>{
    setStr('test2')
  }

  return (
    <>
      <h1>{str}</h1>
      <button onClick={handleClick}>点击</button>
    </>
  )
}

export default App

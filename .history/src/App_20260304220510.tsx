import { useState } from 'react'


function App() {
  //所有hook都必须在组件的最顶层调用

  const [str, setStr] = useState('test1') //不能在循环或条件语句中调用它。

  const handleClick=()=>{
    setStr('test2') //接收一个参数，即状态的初始值，然后返回一个数组，其中包含两个元素：当前的状态值和一个更新该状态的函数
  }

  return (
    <>
      <h1>{str}</h1>
      <button onClick={handleClick}>点击</button>
    </>
  )
}

export default App

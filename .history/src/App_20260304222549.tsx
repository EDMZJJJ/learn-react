import { useReducer, useState } from 'react'

const initData = [
  { name: '小满(只)', price: 100, count: 1, id: 1, isEdit: false },
  { name: '中满(只)', price: 200, count: 1, id: 2, isEdit: false },
  { name: '大满(只)', price: 300, count: 1, id: 3, isEdit: false }
]
type Data = typeof initData

const initFn =(state:Data)=>{
    return state
}

// 处理函数
const reducer =(state:Data)=>{
    return state
}
function App() {
  //所有hook都必须在组件的最顶层调用，不能在循环或条件语句中调用它。

  // const [str, setStr] = useState('test1') //接收一个参数，即状态的初始值，然后返回一个数组，其中包含两个元素：当前的状态值和一个更新该状态的函数
  // const handleClick=()=>{
  //   setStr('test2') //
  // }

  const [data ,dispatch] = useReducer(reducer,initData,initFn)

  return (
    <>
      {/* <h1>{str}</h1>
      <button onClick={handleClick}>点击</button> */}
    </>
  )
}

export default App

import Card from "./components/Card"
import Test from "./components/Test"

function App() {
  //所有hook都必须在组件的最顶层调用，不能在循环或条件语句中调用它。

  return (
    <>
      <Card></Card>            
      <button onClick={() => window.onShow()}>提示</button>     //全局组件
      
      //组件通信
      <Test></Test>
    </>
  )
}

export default App

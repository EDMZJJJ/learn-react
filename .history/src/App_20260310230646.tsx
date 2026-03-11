import Card from "./components/Card"
import Test from "./components/Test"

function App() {
  //所有hook都必须在组件的最顶层调用，不能在循环或条件语句中调用它。

  return (
    <>
      <Card></Card>            
      {/* 全局组件 */}
      <button onClick={() => window.onShow()}>提示</button>     
      
      {/* 组件通信 */}
      <Test 
        title={'测试'}
        id={1}
        obj={{ a: 1, b: 2 }}
        arr={[1, 2, 3]}
        cb={(a: number, b: number) => a + b}
        empty={null}
        element={<div>测试</div>}
        isGirl={false}
        callback={fn}
      >
        <div>children</div>
      </Test>
    </>
  )
}

export default App

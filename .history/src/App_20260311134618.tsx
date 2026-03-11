import { lazy, Suspense } from "react"
import Card from "./components/Card"
import Test from "./components/Test"
const AsyncComponent=lazy(()=>import('./components/Async')) // 使用lazy进行异步加载组件
import NewCard from './components/NewCard'
import { Skeleton } from "./components/Skeleton"


enum Role {
  ADMIN='admin',
  USER='user' 
}
const withAuthorrization
const App: React.FC = () =>  {
  //所有hook都必须在组件的最顶层调用，不能在循环或条件语句中调用它。
  const fn = (params:string)=>{
    console.log('子组件触发了 父组件的事件',params)
  }
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

      {/* 异步组件 */}
      {/* 使用Suspense包裹异步组件，fallback指定加载过程中的占位组件 */}
      <Suspense fallback={<div>loading</div>}>
        <AsyncComponent />
      </Suspense>

      <Suspense fallback={<Skeleton></Skeleton>}>
        <NewCard></NewCard>
      </Suspense>
    </>
  )
}

export default App

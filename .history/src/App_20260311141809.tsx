import React, { lazy, Suspense, use, useEffect } from "react"
import Card from "./components/Card"
import Test from "./components/Test"
const AsyncComponent=lazy(()=>import('./components/Async')) // 使用lazy进行异步加载组件
import NewCard from './components/NewCard'
import { Skeleton } from "./components/Skeleton"

// eg:权限判断
const Role = {
  ADMIN: 'admin',
  USER: 'user'
} as const;
type Role = typeof Role[keyof typeof Role];
const withAuthorrization=(role:Role)=>(Component:React.FC)=>{
  const isAuth=(role:Role)=>{
    return  role===Role.ADMIN
  }
  return (props:any)=>{
    if(isAuth(role)){
      return <Component {...props} />  //透传props
    }else{
      return <div>没有权限访问</div>
    }
  }
}
const AdminComponent=withAuthorrization(Role.ADMIN)((props:any)=>{
  console.log(props)
  return <div>管理员页面</div>
})
const UserComponet=withAuthorrization(Role.USER)(()=>{
  return <div>用户页面</div>
})

// eg:封装一个通用的HOC，实现埋点统计，比如点击事件，页面挂载，页面卸载等。
// 封装一个埋点服务
const trackService={
  sendEvent:<T,>(trackType:string, data: T = null as T)=>{
   const eventData = {
      timestamp: Date.now(), // 时间戳
      trackType, // 事件类型
      data, // 事件数据
      userAgent: navigator.userAgent, // 用户代理
      url: window.location.href, // 当前URL
    }
    //发送数据
    navigator.sendBeacon('/track', JSON.stringify(eventData))
  }
}
const withTracking=(Component:React.FC, trackType:string)=>{
  return (props:any)=>{
    // 页面挂载时发送事件
    useEffect(()=>{
      trackService.sendEvent(trackType+'_mount') //组件挂载时发送事件
      return ()=>{
        trackService.sendEvent(trackType+'_unmount') //组件卸载时发送事件
      }
    },[])
    //处理事件
    const trackEvent = (eventType: string, data: any) => {
      trackService.sendEvent(`${trackType}-${eventType}`, data)
    }
    return <Component {...props} trackEvent={trackEvent} />
  }
} 
const Button = ({ trackEvent }) => {
  // 点击事件
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    trackEvent(e.type, {
      name: e.type,
      type: e.type,
      clientX: e.clientX,
      clientY: e.clientY,
    })
  }

  return <button   onClick={handleClick}>我是按钮</button>
}
// 使用HOC高阶组件
const TrackButton = withTrack(Button, 'button')

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

      {/* 高阶组件 */}
      <AdminComponent a="1"/>
      <UserComponet a="1"/>
    </>
  )
}

export default App

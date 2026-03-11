import type { JSX } from "react"
import React from "react"
interface Props {
    title?: string
    id: number
    obj: {
        a: number
        b: number
    }
    arr: number[]
    cb: (a: number, b: number) => number
    empty: null
    element: JSX.Element,
    isGirl:boolean,
    children:React.ReactNode, //在之前的版本children是不需要手动定义的，在18之后改为需要手动定义类型
    callback
}
// 第二种默认值的方式
// const defaultProps: Partial<Props> = {
//     title: '默认标题',
// }
// const Test:React.FC<Props> = (props)=>{
// const { title } = { ...defaultProps, ...props }
//   console.log(props)
//   return (
//     <>
//     <div>title:{title}</div>
//     <div>isGirl:{props.isGirl?1:0}</div>
//     <div>子组件test:{props.element}</div>
//     </>
//   )
// }

// React.FC是函数式组件，是在TS使用的一个范型。FC是Function Component的缩写
// React.FC 帮助我们自动推导Props的类型。

// 第一种默认值的方式
const Test:React.FC<Props> = ({title = '默认标题',...props})=>{
  console.log(props)
  return (
    <>
    <div>title:{title}</div>
    <div>isGirl:{props.isGirl?1:0}</div>
    <div>element:{props.element}</div>
    <div>children:{props.children}</div>
    </>
  )
}
export default Test
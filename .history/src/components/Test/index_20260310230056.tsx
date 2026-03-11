import type { JSX } from "react"

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
    isGirl:boolean
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
//     <div>title:{props.title}</div>
//     <div>isGirl:{props.isGirl?1:0}</div>
//     <div>子组件test:{props.element}</div>
//     </>
//   )
// }

const Test:React.FC<Props> = ({title = '默认标题',...props})=>{
  console.log(props)
  return (
    <>
    <div>title:{title}</div>
    <div>isGirl:{props.isGirl?1:0}</div>
    <div>子组件test:{props.element}</div>
    </>
  )
}
export default Test
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

const Test:React.FC<Props> = ({title = '默认标题'})=>{
  console.log(props)
  return (
    <>
    <div>title:{props.title}</div>
    <div>isGirl:{props.isGirl?1:0}</div>
    <div>子组件test:{props.element}</div>
    </>
  )
}
export default Test
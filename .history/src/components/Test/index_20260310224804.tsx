
interface Props {
    title: string
    id: number
    obj: {
        a: number
        b: number
    }
    arr: number[]
    cb: (a: number, b: number) => number
    empty: null
    element: JSX.Element
}

const Test:React.FC<Props> = (props)=>{
  console.log(props)
  return (
    <div>子组件test</div>
  )
}
export default Test
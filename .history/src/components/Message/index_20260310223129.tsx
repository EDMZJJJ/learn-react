import ReactDom from 'react-dom/client'
import './index.css'

const Message = ()=>{
  return (
    <div>
      提示组件
    </div>
  )
}
interface Itesm {
    messageContainer: HTMLDivElement
    root: ReactDom.Root
}
const queue:Itesm[]=[]
const show=()=>{
  
}

export default Message
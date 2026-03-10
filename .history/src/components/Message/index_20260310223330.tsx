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
const queue:Itesm[]=[]  //创建一个queue队列因为可以点击多次需要存到数组，并且累加每次的高度，使元素没有进行重叠，而是顺移，所以需要一个queue队列，删除的时候就按顺序删除即可。
window.onShow=()=>{
  const messageContainer=document.createElement('div')
  messageContainer.className='message'
  messageContainer.style.top=`${queue.length}*50`
}

export default Message
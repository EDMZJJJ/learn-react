import './index.css'

export default function Card() {
  //接受参数
    window.addEventListener('on-card', (e) => {
        console.log(e.params, '兄弟触发了')
    })

    return (
        <div className='card'>
            <header>
                <div>标题</div>
                <div>副标题</div>
            </header>
            <main>
                内容区域
            </main>
            <footer>
                 <button>确认</button>
                 <button>取消</button>
            </footer>
        </div>
    )
}
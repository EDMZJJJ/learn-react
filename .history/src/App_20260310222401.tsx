import Card from "./components/Card"
function App() {
  //所有hook都必须在组件的最顶层调用，不能在循环或条件语句中调用它。

  return (
    <>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </>
  )
}

export default App

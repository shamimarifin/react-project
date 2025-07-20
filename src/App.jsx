
import Header from "./Header"

function App() {

  return (
    <div>
      <Header/>
      <h1>Welcome to Bangladesh</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid ipsum, cumque libero, ut beatae unde ex sed, tempora suscipit ducimus cupiditate eum eos accusamus architecto quidem doloribus quia numquam.</p>
      <Fruit />
      <Clock />
    </div>
  )
}


function Fruit(){
  return <h1>Hello</h1>
}

function Clock(){
  return(
    <div>
      <h2>What time is is?</h2>
    </div>
  )
}

export default App

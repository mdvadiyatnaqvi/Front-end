import './App.css'
import Heading from './components/Heading'
import Input from './components/Input'
import TodoItems from './components/TodoItems'

function App() {
  let data = [
    {
      name: "Buy milk",
      dueDate: "10/12/2020"
    },
    {
      name: "Buy banana",
      dueDate: "06/11/2020"
    },
    {
      name: "Go to college",
      dueDate: "03/02/2020"
    },
    {
      name: "Buy meat",
      dueDate: "10/06/2020"
    },
  ]

  return (
    <center>
      <Heading />
      <Input />
      <TodoItems todoItems={data} />
    </center>
  )
}

export default App

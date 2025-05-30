import TodoCard from './components/TodoCard'
import './App.css'

function App() {
  var taskList = [
    {
      id: 1,
      taskName: "Do Laundry",
      isDone: false,
    },
    {
      id: 2,
      taskName: "Eat Water",
      isDone: true,
    }
  ]

  return (
    <div className='bg-orange-300  flex flex-col justify-center items-center h-screen'>
      <TodoCard />
      <footer className='fixed bottom-0 bg-orange-100 w-full flex justify-center p-2'>
        This is a footer
      </footer>
    </div>
  )
}

export default App

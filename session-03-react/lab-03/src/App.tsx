// impoort React component
import type React from 'react'
import { Toaster } from 'react-hot-toast'

// import components
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

// import SASS file
import './App.sass'

const App : React.FC = () => {
  return(
    <div>
        <Toaster position="bottom-center" />
        <AddTodo />
        <TodoList />
    </div>
  )
}

export default App
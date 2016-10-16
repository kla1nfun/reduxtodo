import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/TodoList/AddTodo'
import VisibleTodoList from '../../containers/TodoList/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
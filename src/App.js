import React, { useState } from 'react'
import './App.css'
import AddTodo from './components/Todo/AddTodo'
import Layout from './components/Todo/Layout'
import TodoList from './components/Todo/TodoList'

function TodoApp () {
  const [todos, setTodos] = useState([])

  function addTodo (text) {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        text,
        done: false
      }
    ])
  }

  function toggleTodo (index) {
    setTodos(todos.map((todo, idx) => {
      if (idx === index) {
        todo.done = !todo.done
      }
      return todo
    }))
  }

  function removeTodo (index) {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  const [input, setInput] = useState('')

  function handleInputChange (event) {
    setInput(event.target.value)
  }

  function handleInputKeyPress (event, callback) {
    if (event.key !== 'Enter') {
      return false
    }

    callback(event)
    return true
  }

  function clearInputAndAddTodo () {
    addTodo(input)
    setInput('')
  }

  return (
    <Layout>
      <AddTodo
        inputValue={input}
        onInputChange={handleInputChange}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => handleInputKeyPress(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemClick={toggleTodo}
        onItemRemove={removeTodo}
      />
    </Layout>
  )
}

export default TodoApp

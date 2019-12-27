import React from 'react'
import './App.css'
import AddTodo from './components/Todo/AddTodo'
import { useInputValue } from './components/Todo/hooks/form'
import { useTodos } from './components/Todo/hooks/todos'
import Layout from './components/Todo/Layout'
import TodoList from './components/Todo/TodoList'

function TodoApp () {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue()
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos()

  function clearInputAndAddTodo () {
    addTodo(inputValue)
    clearInput()
  }

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
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

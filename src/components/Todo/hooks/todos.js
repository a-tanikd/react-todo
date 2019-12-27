import { useState } from 'react'

export function useTodos (initialValue = []) {
  const [todos, setTodos] = useState(initialValue)
  return {
    todos,
    addTodo: text => {
      if (text === '') {
        return
      }
      setTodos([...todos, {
        text,
        done: false
      }])
    },
    toggleTodo: index => {
      setTodos(
        todos.map((todo, idx) => {
          if (idx === index) {
            todo.done = !todo.done
          }
          return todo
        })
      )
    },
    removeTodo: index => setTodos(todos.filter((_, idx) => idx !== index))
  }
}

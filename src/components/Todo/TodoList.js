import { Paper, List } from '@material-ui/core'
import React from 'react'
import Todo from './Todo'

function TodoList (props) {
  return (
    <>
      {props.items.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: 'scroll' }}>
            {props.items.map((todo, index) => (
              <Todo
                {...todo}
                key={`TodoItem.${index}`}
                divider={index !== props.items.length - 1}
                onButtonClick={props.onItemRemove.bind(index)}
                onCheckBoxToggle={props.onItemCheck.bind(index)}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  )
}

export default TodoList

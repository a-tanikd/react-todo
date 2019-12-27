import { Paper, List } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
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
                onButtonClick={() => props.onItemRemove(index)}
                onCheckBoxToggle={() => props.onItemClick(index)}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  )
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onItemRemove: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default TodoList

import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'
import React from 'react'
import PropTypes from 'prop-types'

function Todo (props) {
  return (
    <ListItem divider={props.divider}>
      <Checkbox onClick={props.onCheckBoxToggle} checked={props.done} disableRipple />
      <ListItemText primary={props.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

Todo.propTypes = {
  divider: PropTypes.bool.isRequired,
  onCheckBoxToggle: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
}

export default Todo

import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import Delete from '@material-ui/icons/Delete';
import React from 'react';

function Todo(props) {
  return (
    <ListItem divider={props.divider}>
      <Checkbox onClick={props.onCheckBoxToggle} checked={props.checked} disableRipple />
      <ListItemText primary={props.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={props.onButonClick}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;

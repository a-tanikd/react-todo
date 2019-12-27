import { AppBar, Paper, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

function Layout (props) {
  return (
    <Paper elevation={0} style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}>
      <AppBar color="primary" position="static" style={{ height: 64 }}>
        <Toolbar style={{ height: 64 }}>
          <Typography variant="h5" color="inherit">
            Simple React Todo App with Hooks
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Paper>
  )
}

export default Layout

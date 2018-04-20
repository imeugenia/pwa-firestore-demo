import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProjectList from '../../containers/ProjectList'

const renderer = createRenderer()

const App = props => (
  <Provider renderer={renderer}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Route path="/" component={ProjectList} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
)

export default App

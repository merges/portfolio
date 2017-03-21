import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
// import Project from './Project'

const Routes = (props) => (
  <Router {...props}>
    <Route exact path="/" component={Home} />
    {/*<Route path="/project" component={Project} />*/}
    {/*<Route path="*" component={NotFound} />*/}
  </Router>
)

export default Routes
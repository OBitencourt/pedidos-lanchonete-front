import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


import TemplatePage from './templates/Page';
import TemplateDefault from './templates/Default'

import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <TemplateDefault>
            <Route path="/admin">
              
            </Route>
          </TemplateDefault>
            <Route path="/">
              <TemplatePage title='Admin Login' Component={Login} />
            </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;

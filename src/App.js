import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


import TemplatePage from './templates/Page';
import TemplateClean from './templates/Clean';
import TemplateDefault from './templates/Default'

import Painel from './pages/Painel';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <TemplateDefault>
            <Route path="/admin">
              
            </Route>
            <Route path="/">
              <TemplatePage title='Admin Painel' Component={Painel} />
            </Route>
          </TemplateDefault>
        </Switch>
      </Router>
    </>
  )
}

export default App;

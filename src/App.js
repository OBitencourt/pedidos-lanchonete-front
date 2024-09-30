import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


import TemplatePage from './templates/Page';
// import TemplateClean from './templates/Clean';
import TemplateDefault from './templates/Default'

import Painel from './pages/Painel';

import ListProducts from './pages/products/ListProducts'
import AddProducts from './pages/products/AddProduct'
import EditProduct from './pages/products/EditProduct';

const App = () => {
  return (
    <>
      <Router>
        <Switch>          
          <Route path="/products/add">
            <TemplateDefault>
              <TemplatePage title='Add Product' Component={AddProducts} />
            </TemplateDefault>
          </Route>
          <Route path="/products/edit/:id">
            <TemplateDefault>
              <TemplatePage title='Edit Product' Component={EditProduct} />
            </TemplateDefault>
          </Route>
          <Route path="/products">
            <TemplateDefault>
              <TemplatePage title='Products' Component={ListProducts} />
            </TemplateDefault>
          </Route>

          {/* Route for the main page (Admin Painel) */}
          <Route path="/">
            <TemplateDefault>
              <TemplatePage title='Admin Painel' Component={Painel} />
            </TemplateDefault>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;

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

import ListCustomers from './pages/customers/ListCustomers';
import AddCustomer from './pages/customers/AddCustomer'
import EditCustomer from './pages/customers/EditCustomer';

import ListOrders from './pages/orders/ListOrders';
import EditOrder from './pages/orders/EditOrder'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/orders/edit/:id">
            <TemplateDefault>
              <TemplatePage title='Edit Order' Component={EditOrder} />
            </TemplateDefault>
          </Route>

          <Route path="/orders">
            <TemplateDefault>
              <TemplatePage title='Orders' Component={ListOrders} />
            </TemplateDefault>
          </Route>

          <Route path="/customers/edit/:id">
            <TemplateDefault>
              <TemplatePage title='Edit Customer' Component={EditCustomer} />
            </TemplateDefault>
          </Route>

          <Route path="/customers/add">
            <TemplateDefault>
              <TemplatePage title='Add Customer' Component={AddCustomer} />
            </TemplateDefault>
          </Route>

          <Route path="/customers">
            <TemplateDefault>
              <TemplatePage title='Customers' Component={ListCustomers} />
            </TemplateDefault>
          </Route>
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

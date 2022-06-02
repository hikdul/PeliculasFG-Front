import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import rutas from './RouteConfig';
import Menu from './utils/Menu';

function App() {

// el render
return(
  <>
    <BrowserRouter>
      <Menu />
      <div className='Container'>
        <Switch>
          {rutas.map(ruta=>
            <Route key={ruta.path} path={ruta.path} exact={ruta.exact} >
              <ruta.component />
            </Route>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  </>


  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import rutas from './RouteConfig';
import Menu from './utils/Menu';

/// ###=====> ### <======###
/// aqui traigo la clase donde genere mis validaciones 
import ConfigurateValidations from './Validaciones';
/// aqui corro mi funcion al menos una ves
ConfigurateValidations()
/// ###=====> ### <======###

function App() {

// el render
return(
  <>
    <BrowserRouter>
      <Menu />
      <div className='container mt-1'>
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

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route
                exact={true}
                path="/"
                component={Home}
            />
            <Route render={() => {
                return (
                    <p>Page Not Found</p>
                );
            }} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

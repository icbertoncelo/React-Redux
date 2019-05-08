import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Footer from '../components/footer';

const Router = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </>
  </BrowserRouter>
);

export default Router;

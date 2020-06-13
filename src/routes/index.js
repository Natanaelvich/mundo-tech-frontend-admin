import React from 'react';
import { Switch } from 'react-router-dom';

import Private from './private';
import Guest from './guest';

import Main from '../pages/Main';
import ProducDetail from '../pages/ProductDetail';
import ProductRegister from '../pages/ProductRegister';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Private path="/" exact component={Main} />
      <Private path="/details" component={ProducDetail} />
      <Private path="/product-register" component={ProductRegister} />
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
    </Switch>
  );
}

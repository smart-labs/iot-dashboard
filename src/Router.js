import React from 'react';
import { useGlobal } from 'reactn';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Overview from './pages/Overview';
import SmartTrash from './pages/SmartTrash';
import AirConditioning from './pages/AirConditioning';
import SmartRoom from './pages/SmartRoom';
import Map from './pages/Map';

const Router = () => {
  const [user] = useGlobal('user');

  if (!user) return <Login />;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/trash" exact component={SmartTrash} />
        <Route path="/ac" exact component={AirConditioning} />
        <Route path="/room" exact component={SmartRoom} />
        <Route path="/map" exact component={Map} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

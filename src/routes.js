import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Users from './pages/Users';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/users" component={Users} />
        </Switch>
    );
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';

export function Router() {
    return (
        <Switch>
            {routes.map((route, key) => {
                if (route.path === '/') {
                    return <Route key={key} path={route.path} exact component={route.component} />
                } else {
                    return <Route key={key} path={route.path} component={route.component} />
                }
            })}
        </Switch>
    );
}

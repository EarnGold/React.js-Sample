import React from 'react';
import { Route, Switch } from 'react-router';
import loadable from '@loadable/component'
import { createBrowserHistory } from 'history';

import Home from '~/home/Home';
import NotFound from '~/not-found/NotFound';

export const history = createBrowserHistory();

const Router = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route
        path="/hello-world"
        component={loadable(() => import('~/shell/hello-world/HelloWorld'))}
      />
      <Route
        path="/sort-filter-list"
        component={loadable(() => import('~/shell/SortFilterList'))}
      />
      <Route
        path="/recursive-list"
        component={loadable(() => import('~/shell/RecursiveList'))}
      />
      <Route
        path="/crud-operations/basic"
        component={loadable(() =>
          import('~/shell/crud-operations/basic/Basic'),
        )}
      />

      <Route path="*" component={NotFound} />
    </Switch>
  </>
);

export default Router;

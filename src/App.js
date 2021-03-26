import { Redirect, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { computed } from 'mobx';

import * as paths from '@routes/paths';
import * as routes from '@routes/routes';
import { Layout } from '@layout/Layout';
import { authState } from '@store/authState';

const App = observer(() => {
  const { isAuthenticated } = authState;

  const appRoutes = Object.values(routes).filter(({ authenticated }) => authenticated === isAuthenticated);

  let app = (
    <Switch>
      {appRoutes.map(({ path, title, component }) => (
        <Route key={title} path={path} exact component={component} />
      ))}
      <Redirect to={paths.login} />
    </Switch>
  );

  if (isAuthenticated) {
    const permittedRoutes = appRoutes.reduce((prev, curr) => {
      const hasPermission = computed(() => authState.hasPermission(curr.permission)).get();
      if (hasPermission) {
        prev.push(<Route exact key={curr.title} path={curr.path} component={curr.component} />);
      }
      return prev;
    }, []);

    app = (
      <Layout>
        <Switch>
          {permittedRoutes}
          <Redirect to={paths.headcount} />
        </Switch>
      </Layout>
    );
  }

  return app;
});

export default App;

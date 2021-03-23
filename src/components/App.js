import { LoginPage } from '@components/loginPage/LoginPage';
import { MainContent } from '@components/mainContent/MainContent';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react';

const App = observer(({ authState }) => {
  const { auth } = authState;
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [auth, history]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
});

export default App;

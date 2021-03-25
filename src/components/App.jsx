import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react";

import { LoginPage } from "@components/LoginPage/LoginPage";
import { Layout } from "@components/layout/Layout";
import { authState } from "@store/authState";

const App = observer(() => {
  const { auth } = authState;
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push("/pages/headcount");
    } else {
      history.push("/login");
    }
  }, [auth, history]);

  return (
    <div>
      <Switch>
        <Route path="/pages" component={Layout} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
});

export default App;

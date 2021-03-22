import React from 'react';
import {LoginPage} from "@components/loginPage/LoginPage";
import {loginPageState} from "@store/loginPageState";

function App() {
  return (
    <div>
      Bad Forecast
        <LoginPage loginPageState={loginPageState} />
    </div>
  );
}

export default App;
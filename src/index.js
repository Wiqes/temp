import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import '@fontsource/roboto';
import App from '@components/App';
import { authState } from '@store/authState';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App authState={authState} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

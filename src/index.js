import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router } from 'react-router-dom';

const MyApp = () => (
    <MuiThemeProvider>
      <Router>
      <App />
      </Router>
    </MuiThemeProvider>
  );
ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();

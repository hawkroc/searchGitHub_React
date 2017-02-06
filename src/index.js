import React from 'react';
import ReactDOM from 'react-dom';
import AppBarIcon from './AppBarIcon';
import App from './App.js';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <AppBarIcon />,
  document.getElementById('root')
);


ReactDOM.render(

  <App/>,
  document.getElementById('test')
);


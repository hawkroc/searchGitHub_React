import React from 'react';
import ReactDOM from 'react-dom';
import AppBarIcon from './AppBarIcon';
import Search from './SearchControlled';
import getJSON from './SysLoadJson';
import RepoList from './RepoList';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


let promise=getJSON('react','stars');

ReactDOM.render(
  <AppBarIcon />,
  document.getElementById('root')
);



ReactDOM.render(

  <Search />,
  document.getElementById('search')
);


ReactDOM.render(
  <RepoList promise={promise}/>,
  document.getElementById('content')
);

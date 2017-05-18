import React from 'react';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppBarIcon = () => (
	   <MuiThemeProvider>
  <AppBar
    title="gitHub search by Peng"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >

  </AppBar>
     </MuiThemeProvider>
);

export default AppBarIcon;
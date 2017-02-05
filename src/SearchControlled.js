import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const keywords = [
  'javascript',
  'react',
  'java',
  'c#',
  'sql',
  'python',
  'spring',
  'mysql',
  'redis',
];
const style = {
  margin: 16,
};

export default class SearchControlled extends Component {
  state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
      searchText: this.state.searchText,
    });
  };

  onclickButton = () => {
    console.log(""+this.state.searchText);
  };

  render() {
    return (
     
        <MuiThemeProvider >
      
         <div>
        <AutoComplete
          hintText="Type keywords, case insensitive"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={keywords}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
          style={{margin:'1em 25%'}}
        />
            <RaisedButton label="search" primary={true} style={style} onClick={this.onclickButton}/>
              </div>
          </MuiThemeProvider>
    
    );
  }
}
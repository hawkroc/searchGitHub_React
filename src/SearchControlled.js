import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import getJSON from './SysLoadJson';
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
  margin:'1em 3em 1em 32% ',
};

export default class SearchControlled extends Component {
  state = {
    searchText: '',
    promise:{},
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

componentDidMount =()=>{

this.props.changeItem(getJSON('java','stars'));

}


  onclickButton = () => {

this.updatePromise(getJSON(this.state.searchText,'stars'));
    this.props.changeItem(this.state.promise);
  };

  updatePromise(promise){
 this.setState({
      promise: promise,
    });
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
          style={style}
        />
            <RaisedButton label="search" primary={true}  onClick={this.onclickButton}/>
              </div>
          </MuiThemeProvider>
    
    );
  }
}
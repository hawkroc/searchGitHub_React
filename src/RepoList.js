import React, { Component } from 'react';
import Chips from './Chips';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class RepoList extends Component{
 constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      error: null,
      contentClass:{width:'40%',display: 'inline-block',margin:'1em'},
      data: null
    };
  };

componentWillReceiveProps= (nextProps)=> {

this.setPromise(nextProps.promise);
};
  

  setPromise(promise){

  promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));

  };

  render() {

    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      let repos = this.state.data.items;
      let repoList = repos.map((repo, index) => {
        return (

               <Card  key={index}  
                style={this.state.contentClass}>

    <CardHeader
      title={repo.full_name}
      actAsExpander={true}
     avatar={repo.owner.avatar_url}
      showExpandableButton={true}
    >

  <Chips stars={repo.stargazers_count} />
    </CardHeader>
    <CardActions>
     <a href={repo.html_url}>{repo.name}</a>
    </CardActions>
    <CardText expandable={true}>
    <a href={repo.homepage}>{repo.name}</a>
     
     {repo.description}
    </CardText>    
  </Card>
        );
      });
      return (
        <main>
          <h1>Most Popular  Projects in Github</h1>
          <MuiThemeProvider>
          <ol className="zoomInUp">{repoList}</ol>
          </MuiThemeProvider>
        </main>
      );
    }
  }
};
export default RepoList;
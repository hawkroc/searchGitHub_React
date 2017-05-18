import React, { Component } from 'react';
import Chips from './Chips';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
class RepoList extends Component{
 constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      error: null,
      contentClass:{width:'40%',display: 'inline-block',margin:'1em'},
      cardStyle:{wordWrap:'wordBreak'},
      data: null
    };
  };

componentWillReceiveProps= (nextProps)=> {

this.setPromise(nextProps.promise);
};
  
  setPromise(promise){
  // console.log('test promise++++++++++++==');
  promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  
  };

  render() {

    if (this.state.loading) {
      return  <div>
   <LinearProgress mode="indeterminate" />
  </div>
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      let repos = this.state.data.items;
    //  console.log(repos);
      let repoList = repos.map((repo, index) => {
        return (
                 <div  key={index} style={this.state.contentClass}>
               <Card>

    <CardHeader
      title={repo.name}
      subtitle={repo.language}
      actAsExpander={true}
     avatar={repo.owner.avatar_url}
      showExpandableButton={true}
       style={this.state.cardStyle}
    >

  <Chips stars={repo.stargazers_count} />
    </CardHeader>
    <CardActions>
     <a href={repo.html_url}>{repo.full_name}</a>

    </CardActions>
    <CardText expandable={true}>
     {repo.description}
    </CardText>    
  </Card>
  </div>
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
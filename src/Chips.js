import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Star from '../public/ic_star_black_18px.svg';
import './App.css';


const styles = {
  chip: {
    margin: 4,
  },
  img: '../public/ic_star_black_18px.svg',
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};



function handleTouchTap() {
  //alert('You clicked the Chip.');
}

export default class Chips extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>     
        <Chip onTouchTap={handleTouchTap} style={styles.chip}>
          <Avatar size={32}>

 <img src={Star} alt="" className="Star"  />
      </Avatar>
      <div>
     {this.props.stars}
         </div>
        </Chip>

       
      </div>
    );
  }
}
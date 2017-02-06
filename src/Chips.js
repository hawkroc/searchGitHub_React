import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Star from './../public/ic_star_black_18px.svg';


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};



function handleTouchTap() {
  //alert('You clicked the Chip.');
}

/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */
export default class Chips extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>

       
        <Chip onTouchTap={handleTouchTap} style={styles.chip}>
          <Avatar size={32}>

 <img src={Star} className="Star" alt=""  />
      </Avatar>
      <div>
     {this.props.stars}
         </div>
        </Chip>

       
      </div>
    );
  }
}
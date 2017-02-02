import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
//import FontIcon from 'material-ui/FontIcon';
import Star from './../public/ic_star_black_18px.svg';
//import SvgIconFace from 'material-ui/svg-icons/action/face';
//import {blue300, indigo900} from 'material-ui/styles/colors';

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
constructor(props, context) {
    super(props, context);
 
   //
  };
  render() {
    return (
      <div style={styles.wrapper}>

       
        <Chip onTouchTap={handleTouchTap} style={styles.chip}>
          <Avatar size={32}>

 <img src={Star} className="Star" />
      </Avatar>
      <div>
     {this.props.stars}
         </div>
        </Chip>

       
      </div>
    );
  }
}
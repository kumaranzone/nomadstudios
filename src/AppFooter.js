import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import './App.css';

const faceBookIcon = <FontIcon className="fa fa-facebook-official fa-3x"></FontIcon>;
// const twitterIcon = <FontIcon className="fa fa-instagram fa-2x"></FontIcon>;
const instagramIcon = <FontIcon className="fa fa-instagram fa-3x"></FontIcon>;
// const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class AppFooter extends Component {
    state = {
      selectedIndex: 0,
    };
  
    select = (index) => this.setState({selectedIndex: index});
  
    render() {
      return (
        <Paper zDepth={1} className="appFooter">
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            {/* <BottomNavigationItem
              icon={recentsIcon}
              onClick={() => this.select(0)}
            /> */}
            <BottomNavigationItem
              icon={instagramIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              icon={faceBookIcon}
              onClick={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      );
    }
  }
  
  export default AppFooter;
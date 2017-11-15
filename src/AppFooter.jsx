import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import './App.css';

const faceBookIcon = <FontIcon className="fa fa-facebook-official fa-3x"></FontIcon>;
// const twitterIcon = <FontIcon className="fa fa-instagram fa-2x"></FontIcon>;
const instagramIcon = <FontIcon className="fa fa-instagram fa-3x"></FontIcon>;
const emailIcon = <FontIcon className="fa fa-envelope"></FontIcon>;

const phoneIcon = <span><FontIcon className="fa fa-phone"></FontIcon>&nbsp;9902326052</span>;
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

    sendEmail = () => {
      window.location.href = "mailto:nomadstudios9@gmail.com?body=Regarding Business&subject=Contacting for business";
    }
  
    select = (index) => this.setState({selectedIndex: index});
  
    render() {
      return (
        <Paper zDepth={1} className="appFooter">
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              icon={emailIcon}
              onClick={() => this.sendEmail()}
            />
            <BottomNavigationItem
              icon={instagramIcon}
              // onClick={(e) => {e.preventDefault(); window.open('https://www.instagram.com/ganeshk53/','_blank')}}
            />
            <BottomNavigationItem
              icon={faceBookIcon}
              // onClick={(e) => {e.preventDefault();window.open('https://www.facebook.com/nomadstudios.RG/','_blank')}}
            />
          </BottomNavigation>
        </Paper>
      );
    }
  }
  
  export default AppFooter;
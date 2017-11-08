import React, { Component } from 'react';
import logo from './logo.svg';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import ImageSlider from './ImageSlider';
import './App.css';
 // eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <header className="intro-header">
          <ImageSlider />
        </header>
        <AppFooter />
      </div>
    );
  }
}

export default App;

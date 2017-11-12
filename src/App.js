import React, { Component } from 'react';
import logo from './logo.svg';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import ImageSlider from './ImageSlider';
import MenuBar from './menuBar';
import VideoPlayer from './videoSection';
import './App.css';
 // eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <AppHeader/>
        </header>
        <main>
          <MenuBar />
          <ImageSlider />
          <VideoPlayer />
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;

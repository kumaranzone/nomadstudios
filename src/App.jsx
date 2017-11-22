import React, { Component } from 'react';
import logo from './logo.svg';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import Home from './home';
import About from './about';
import Contact from './contact';
import MenuDetail from './menuDetail';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
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
          {this.props.children}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/prewedding" component={MenuDetail}/>
          <Route path="/fashion-boudoir" component={MenuDetail}/>
          <Route path="/baby" component={MenuDetail}/>
          <Route path="/product" component={MenuDetail}/>
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;

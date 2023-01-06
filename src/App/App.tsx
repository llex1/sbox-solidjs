import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router'

import styles from './App.module.css';
import Auth from './components/Auth/Auth';

const App: Component = () => {
  return (
    <Router>
      <Auth/>
      {/* <Route path="/" component={Auth} /> */}
    </Router>
  );
};

export default App;

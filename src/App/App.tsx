import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router'

import styles from './App.module.css';
import Auth from './components/Auth/Auth';

const App: Component = () => {
  return (
    <Router>
      <Route path="/users" component={Auth} />
      <div class={styles.App}>
      </div>
    </Router>
  );
};

export default App;

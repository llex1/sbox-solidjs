import type { Component } from 'solid-js';
import { Router } from '@solidjs/router'

import styles from './App.module.css';

const App: Component = () => {
  return (
    <Router>
      <div class={styles.App}>
      </div>
    </Router>
  );
};

export default App;

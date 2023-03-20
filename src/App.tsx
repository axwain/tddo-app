import React from 'react';

import logo from './logo.svg';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://create-react-app.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
    </div>
  );
};

export default App;

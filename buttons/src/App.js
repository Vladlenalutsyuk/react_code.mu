// src/App.js
import classes from './App.module.css';
import Inputs from './components/Inputs';

function App() {
  return (
    <div className={classes.app}>
      <h2 className={classes.title}>CSS Module Inputs</h2>
      <div className={classes.wrapper}>
        <Inputs />
      </div>
    </div>
  );
}

export default App;
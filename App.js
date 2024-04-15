import { useState, useEffect } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
      console.log(progress)
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
}

export default App;

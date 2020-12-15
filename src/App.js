import './App.css';
import Weather from './weatherModule/weather.js';
import Time from './timeModule/time.js';

function App() {
  return (
    <div className="App">
      <Time />
      <Weather />
    </div>
  );
}

export default App;

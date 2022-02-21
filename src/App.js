import './App.css';
import Weather from './weatherModule/weather.js';
import Time from './timeModule/time.js';
import Menu from './menu/menu.js';
import Quote from './quoteModule/quote.js'

function App() {
  return (
    <div className="App">
      <Time />
      <Weather />
      <Quote />
      <Menu />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

var port = process.env;
function App() {
  console.log(port);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          React App is running on 
        </p>
      </header>
    </div>
  );
}

export default App;

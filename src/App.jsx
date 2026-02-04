import './App.css';
import OpenAI from './OpenAI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <div>
          <OpenAI />
        </div>
      </header>
    </div>
  );
}

export default App;

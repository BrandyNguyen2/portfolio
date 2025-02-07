import logo from './cloud.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Brandy Nguyen's Portfolio</title>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="style">
          Welcome to Brandy's Portfolio! (Under Construction)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects
        </a>
      </header>
    </div>
  );
}

export default App;

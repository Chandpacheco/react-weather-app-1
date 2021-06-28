import "./App.css";
import Weather from "./Weather";




function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by
          <a
            href="https://www.linkedin.com/in/chandlerpacheco"
            target="_blank"
            rel="noreferrer"
          >
            Chandler Pacheco
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Chandpacheco/react-weather-app-1"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

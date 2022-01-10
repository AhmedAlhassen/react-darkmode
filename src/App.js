/** @jsxImportSource theme-ui */

import logo from "./logo.svg";
import "./App.css";
import { useColorMode } from "theme-ui";
import { useMediaQuery } from "react-responsive";

function App() {
  const [colorMode, setColorMode] = useColorMode();
  useMediaQuery(
    {
      query: "(prefers-color-scheme : dark)",
    },
    undefined,
    (isDarkPreffered) => setColorMode(isDarkPreffered ? "dark" : "light")
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontWeight: "bold", color: "primary" }}
        >
          Learn React
        </a>
        <br />
        <button
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
          sx={{
            bg: "primary",
            color: "inverseText",
            padding: ".8rem",
            outline: "none",
            border: "none",
            borderRadius: "47%",
            fontSize: "1rem",
          }}
        >
          {colorMode === "light" ? "Dark 🌛" : "Light 🌞"}
        </button>
      </header>
    </div>
  );
}

export default App;

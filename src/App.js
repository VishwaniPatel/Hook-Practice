// import logo from "./logo.svg";
import React, { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./contexts/ThemeContext";
import WelcomePanel from "./WelcomePanel";
function App() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <WelcomePanel />

        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: "none",
          }}
          data-testid="toggle-theme-btn"
        >
          Toggle to {!dark ? "Dark" : "Light"} theme
        </button>
      </header>
    </div>
  );
}

export default App;

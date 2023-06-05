import React, { useContext } from "react";
import Panel from "./Panel";
import Greeting from "./Greeting";
import Login from "./Login";
import { CurrentUserContext } from "./contexts/ThemeContext";
function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <Login />}
    </Panel>
  );
}

export default WelcomePanel;

import React, { useContext } from "react";
import { CurrentUserContext } from "./contexts/ThemeContext";
function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You logged in as {currentUser.name}.</p>;
}

export default Greeting;

import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

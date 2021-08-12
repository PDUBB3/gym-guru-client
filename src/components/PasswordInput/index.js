import { useState } from "react";
import "./PasswordInput.css";

export default function PasswordInput() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form-element">
      <input
        className="password-input"
        placeholder="Password"
        type={passwordShown ? "text" : "password"}
      />
      <button onClick={togglePassword}>Show/Hide</button>
    </div>
  );
}
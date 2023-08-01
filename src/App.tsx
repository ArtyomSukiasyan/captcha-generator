import { useState, useEffect } from "react";
import RefreshIcon from "./assets/RefreshIcon";
import "./App.css";
import generateRandomString from "./helpers/generateRandomString";

export default function App() {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const captchaText = generateRandomString();

    setCaptchaText(captchaText);
    setUserInput("");
  };

  const handleInputChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    const formattedCaptchaText = captchaText.replace(/\s/g, "");
    const formattedUserInput = userInput.replace(/\s/g, "");

    if (formattedUserInput === formattedCaptchaText) {
      setMessage("Entered captcha is correct");

      return;
    }

    setMessage("Entered captcha is not correct");
  };

  return (
    <div className="container">
      <header>Captcha Generator</header>
      <div className="input_field captcha_box">
        <input type="text" value={captchaText} disabled />
        <button className="refresh_button" onClick={generateCaptcha}>
          <RefreshIcon />
        </button>
      </div>
      <div className="input_field captcha_input">
        <input
          type="text"
          placeholder="Enter captcha"
          value={userInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="message">{message}</div>
      <div className={`input_field button ${!userInput ? "disabled" : ""}`}>
        <button onClick={handleSubmit}>Submit Captcha</button>
      </div>
    </div>
  );
}

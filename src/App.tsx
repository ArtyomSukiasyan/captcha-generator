import "./App.css";
import RefreshIcon from "./assets/RefreshIcon";

function App() {
  return (
    <div className="container">
      <header>Captcha Generator</header>
      <div className="input_field captcha_box">
        <input type="text" value="" disabled />
        <button className="refresh_button">
          <RefreshIcon />
        </button>
      </div>
      <div className="input_field captcha_input">
        <input type="text" placeholder="Enter captcha" />
      </div>
      <div className="message">Entered captcha is correct</div>
      <div className="input_field button disabled">
        <button>Submit Captcha</button>
      </div>
    </div>
  );
}

export default App;

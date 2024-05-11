import './style.css';
function App() {
  return (
    <div className="calculator">
      <input type="text" id="display" disabled />
      <div className="row">
        <input type="button" value="7" />
        <input type="button" value="8" />
        <input type="button" value="9" />
        <input type="button" value="/" />
      </div>
      <div className="row">
        <input type="button" value="4" />
        <input type="button" value="5" />
        <input type="button" value="6" />
        <input type="button" value="-" />
      </div>
      <div className="row">
        <input type="button" value="1" />
        <input type="button" value="2" />
        <input type="button" value="3" />
        <input type="button" value="+" />
      </div>
      <div className="row">
        <input type="button" value="C" />
        <input type="button" value="0" />
        <input type="button" value="=" />
        <input type="button" value="*" />
      </div>
      <div className="row">
        <input type="button" value="Reset" />
      </div>
    </div>
  );
}

export default App;

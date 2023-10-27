import "./App.css";

import { useReducer } from "react";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    ok: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    dispatch({ type: "GOOD" });
  };

  const handleOkClick = () => {
    dispatch({ type: "OK" });
  };

  const handleBadClick = () => {
    dispatch({ type: "BAD" });
  };

  const handleResetClick = () => {
    dispatch({ type: "ZERO" });
  };

  return (
    <div>
      <div>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleOkClick}>Ok</button>
        <button onClick={handleBadClick}>Bad</button>
        <button onClick={handleResetClick}>Reset stats</button>
      </div>
      <div>
        <p>Good: {state.good}</p>
        <p>Ok: {state.ok}</p>
        <p>Bad: {state.bad}</p>
      </div>
    </div>
  );
}

export default App;

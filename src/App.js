import React, { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Input from "./components/input/Input";

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div className="App">
      <Counter number={number} />
      {/* <Input setNumber={setNumber} number={number} /> */}
    </div>
  );
}

export default App;

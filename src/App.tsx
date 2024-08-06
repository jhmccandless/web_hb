import React from "react";
import "./App.css";
import TimerForm from "./components/TimerForm";
import { Provider } from "react-redux";
import { store } from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>app here</p>
        <TimerForm />
      </div>
    </Provider>
  );
}

export default App;

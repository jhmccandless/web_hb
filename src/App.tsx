import React from "react";
import "./App.css";
import TimerForm from "./components/TimerForm";
import { Provider } from "react-redux";
import { store } from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <div className="header">
          <p>header</p>
        </div>
        <div className="main">
          <TimerForm />
        </div>
        <div className="footer">
          <p>footer</p>
        </div>
        {/* <TimerForm /> */}
      </div>
    </Provider>
  );
}

export default App;

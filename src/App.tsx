import "./App.css";
import TimerForm from "./components/TimerForm";
import { Provider } from "react-redux";
import { store } from "./components/store";
import AppLayout from "./components/AppLayout";
import { Route, Routes } from "react-router-dom";
import Timer3UI from "./components/Timer3UI";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<AppLayout desComp={<TimerForm />} />} />
        <Route path="/workout" element={<AppLayout desComp={<Timer3UI />} />} />
      </Routes>
    </Provider>
  );
}

export default App;

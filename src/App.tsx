import "./App.css";
import RepeaterTimerForm from "./components/RepeaterTimerForm";
import { Provider } from "react-redux";
import { store } from "./appSlices/store";
import AppLayout from "./components/AppLayout";
import { Route, Routes } from "react-router-dom";
import Timer3UI from "./components/RepeaterTimer";
import NonRoute from "./components/NonRoute";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import OnOffTimerForm from "./components/OnOffTimerForm";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<AppLayout desComp={<HomePage />} />} />
        <Route
          path="/form-on-off"
          element={<AppLayout desComp={<OnOffTimerForm />} />}
        />
        <Route
          path="/form-repeaters"
          element={<AppLayout desComp={<RepeaterTimerForm />} />}
        />
        <Route path="/workout" element={<AppLayout desComp={<Timer3UI />} />} />
        <Route path="/about" element={<AppLayout desComp={<AboutPage />} />} />
        <Route path="*" element={<NonRoute />} />
      </Routes>
    </Provider>
  );
}

export default App;

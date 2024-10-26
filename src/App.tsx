import { Provider } from "react-redux";
import AppLayout from "./components/AppLayout";
import { Route, Routes } from "react-router-dom";
import NonRoute from "./components/NonRoute";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import WorkoutTimer from "./components/WorkoutTimer";
import TimerForm from "./components/TimerForm";
import { store } from "./appSlices/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<AppLayout desComp={<HomePage />} />} />
        <Route
          path="/form/:timerType"
          element={<AppLayout desComp={<TimerForm />} />}
        />
        <Route
          path="/workout/:timerType"
          element={<AppLayout desComp={<WorkoutTimer />} />}
        />
        <Route path="/about" element={<AppLayout desComp={<AboutPage />} />} />
        <Route path="*" element={<NonRoute />} />
      </Routes>
    </Provider>
  );
}

export default App;

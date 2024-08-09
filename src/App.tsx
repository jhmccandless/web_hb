import "./App.css";
import TimerForm from "./components/TimerForm";
import { Provider } from "react-redux";
import { store } from "./components/store";
import AppLayout from "./components/AppLayout";
import { Route, Routes } from "react-router-dom";
import Timer3UI from "./components/Timer3UI";
import NonRoute from "./components/NonRoute";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<AppLayout desComp={<TimerForm />} />} />
        <Route path="/workout" element={<AppLayout desComp={<Timer3UI />} />} />
        <Route path="/about" element={<AppLayout desComp={<AboutPage />} />} />
        <Route path="*" element={<NonRoute />} />
      </Routes>
    </Provider>
  );
}

export default App;

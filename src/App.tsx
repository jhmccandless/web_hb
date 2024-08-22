import "./App.css";
import TimerForm from "./components/TimerForm";
import { Provider } from "react-redux";
import { store } from "./components/store";
import AppLayout from "./components/AppLayout";
import { Route, Routes } from "react-router-dom";
import Timer3UI from "./components/RepeaterTimer";
import NonRoute from "./components/NonRoute";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<AppLayout desComp={<HomePage />} />} />
          <Route path="/form" element={<AppLayout desComp={<TimerForm />} />} />
          <Route
            path="/workout"
            element={<AppLayout desComp={<Timer3UI />} />}
          />
          <Route
            path="/about"
            element={<AppLayout desComp={<AboutPage />} />}
          />
          <Route path="*" element={<NonRoute />} />
        </Routes>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;

import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { Router, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return;
  <BrowserRouter>
    <Routes>
      <Router component={Login} path="/login" />
      <Router component={ChatRoom} path="/" />
    </Routes>
  </BrowserRouter>;
}

export default App;

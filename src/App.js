import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginScreen, { sendData } from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import SubjectScreen from "./screens/SubjectScreen";
import ProtectedRoutes from "./screens/Protected";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginScreen />} exact/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/home" element={<MainScreen />} />
        </Route>
        <Route path="/subject/:id" element={<SubjectScreen/>}/>

        {/* <Route exact path="/resetpwd" element={<ForgotScreen/>}/>
      <Route exact path='/homepage' element={<HomePage/>}/> */}
      </Routes>

    </Router>
  );
}

export default App;

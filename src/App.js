import Dashboard from "./Screens/Dashboard";
import "./App.css";
import Landing from "./components/Landing";
import LoginScreen from "./Screens/UserScreens/LoginScreen";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./Layout/layout";
import RegisterScreen from "./Screens/UserScreens/RegisterScreen";


function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" exact element={<LoginScreen/>}></Route>
        <Route path="/register" exact element={<RegisterScreen/>}></Route>
        <Route path="/dashboard" exact element={<Layout><Dashboard/></Layout>}></Route>

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;

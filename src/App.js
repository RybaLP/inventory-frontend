import Dashboard from "./Screens/Dashboard";
import "./App.css";
import Landing from "./components/Landing";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./Layout/layout";


function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />}></Route>
        <Route path="/dashboard" exact element={<Layout><Dashboard/></Layout>}></Route>

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;

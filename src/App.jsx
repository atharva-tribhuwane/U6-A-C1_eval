import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes ,Route} from "react-router-dom";
import Home from './components/Home';
import Appointment from './components/Appointment';
import Appointments from './components/Appointments';
import Login from './components/Login';


function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const authcheck = (val)=>{
    setIsAuthenticated(val)
  }
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointments' element={<Appointments />}></Route>
        <Route path='/appointment/:id' element={<Appointment/>}></Route>
        <Route path='/login' element={<Login authcheck={authcheck}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ForumIcon from '@mui/icons-material/Forum';
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from './NavBar';
import { Buttons } from './Buttons';
import { Cards } from './Cards';
import { CartesianGrid, LineChart, Line, Legend } from 'recharts';
import { Login } from './Login';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Register } from './Register';
import { ForgotPassword } from './ForgotPassword';
import { Dashboard } from './Dashboard';
import { Header } from './Header';
import { Footer } from './Footer';

export var data=[
  {
    id : "1",
    name : "EARNINGS (MONTHLY)",
    icon : <CalendarTodayIcon fontSize='large'/>,
    progress : "",
    content : "$40,000",
    color : "#4e73df"
  },
  {
    id : "2",
    name : "EARNINGS (ANNUAL)",
    icon : <CurrencyExchangeIcon fontSize='large'/>,
    progress : "",
    content : "$215,000",
    color : "#1cc88a"
  },
  {
    id : "3",
    name : "TASKS",
    icon : <AssignmentIcon fontSize='large'/>,
    progress : "50",
    content : "",
    color : "#36b9cc"
  },
  {
    id : "4",
    name : "PENDING REQUESTS",
    icon : <ForumIcon fontSize='large'/>,
    progress : "",
    content : 18,
    color : "#f6c23e"
  }
];


function App() {
  const location = useLocation();
  const path = location.pathname;
  var newWindowList = ["/login", "/register","/forgot_password"];
  return (
    newWindowList.includes(path) ? 
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot_password" element={<ForgotPassword />}/>
      </Routes> :
      <div className="App">
        {/* <div className="navBar"> */}
          <NavBar />
        {/* </div> */}
        <div className="mainContainer">
          <Header />
          <Routes>
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </div>
  );
}

export default App;



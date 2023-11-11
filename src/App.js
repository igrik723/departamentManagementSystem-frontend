import React from "react";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar/NavBar";
import { useSelector } from "react-redux";
import './styles/App.css'

function App() {
  
  const user = useSelector(state => state.user)
  return (
    <div className="App">
      <BrowserRouter>
        {user.auth
          ? <NavBar/>
          : null
        }
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;

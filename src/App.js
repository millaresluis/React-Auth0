import './App.css';
import Login from '../src/components/Login.jsx'
import Home from '../src/components/Home.jsx'
import { Routes, Route, Link } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

function App() {

  return (
    <div>
      <Auth0Provider
        domain="dev-arzp4dql.us.auth0.com"
        clientId="nFlhlL7kdZL1z9LPxmWJZdLKA5OGW4ah"
        redirectUri="http://localhost:3000/home"
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home/>} />
        </Routes>
      </Auth0Provider>
    </div>
  );
}

export default App;

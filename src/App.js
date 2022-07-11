import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import Login from "./components/Login";
import { GlobalProvider } from "./context/GlobalState";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
function App() {
  return (
  
    <GlobalProvider>
        <UserAuthContextProvider>
      <Router>
        <Header />
      
        <Routes>
          
        <Route path="/Home" element={
          <ProtectedRoute>
          <Watchlist />
        </ProtectedRoute>
        } />
        

        <Route path="/" element={<Login /> } />
        <Route path="/Signup" element={<Signup /> } />
        
        <Route path="/add" element={
          <ProtectedRoute>
            <Add/>
          </ProtectedRoute>
        } />
         
        <Route path="/watched" element={
          <ProtectedRoute>
            <Watched/>
          </ProtectedRoute>
        } />
        </Routes>
      </Router>
      </UserAuthContextProvider>
    </GlobalProvider>
  );
}

export default App;

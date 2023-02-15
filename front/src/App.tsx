import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import TemplateTest from './pages/test/TemplateTest';
import LoginMain from './pages/login/LoginMain';
import JoinMain from './pages/join/JoinMain';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginMain />}></Route>
                <Route path="/join" element={<JoinMain />}></Route> 
                <Route path="/test" element={<TemplateTest />}></Route> 


            </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;

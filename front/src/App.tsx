import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import TemplateTest from './pages/test/TemplateTest';
import LoginMain from './pages/login/LoginMain';
import JoinMain from './pages/join/JoinMain';
import DashBoardMain from './pages/dashboard/DashBoardMain';
import TestReactScript from './pages/test/TestReactScript';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginMain />}></Route>
                <Route path="/join" element={<JoinMain />}></Route> 
                <Route path="/dashBoardMain" element={<DashBoardMain />}></Route> 
                <Route path="/test" element={<TemplateTest />}></Route> 
                <Route path="/testReact" element={<TestReactScript />}></Route> 
            </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;

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
  // TODO 
  // 첫 메인 페이지에서 로그인 되었으면 --> DashBoard 페이지 로그인 안되었으면 Login Page 로 이동 시켜주기 !! 
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginMain />}></Route>
                <Route path="/login" element={<LoginMain />}></Route>
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

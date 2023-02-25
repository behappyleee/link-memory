import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import TemplateTest from './pages/test/TemplateTest';
import LoginMain from './pages/login/LoginMain';
import JoinMain from './pages/join/JoinMain';
import DashBoardMain from './pages/dashboard/DashBoardMain';
import TestReactScript from './pages/test/TestReactScript';
import { createTheme } from '@mui/material/styles';
import TestPage from './pages/test/TestPage';
import HookTest from './pages/test/HookTest';
import ChangeUserDataMain from './pages/changeUser/ChangeUserDataMain';
import LandingPageLoad from './pages/landingPage/LandingPageLoad';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPageLoad />}></Route>              {/* 처음 진입 페이지 Load */}  
                <Route path="/login" element={<LoginMain />}></Route>               {/* 로그인 페이지 */}      
                <Route path="/join" element={<JoinMain />}></Route>                 {/* 회원가입 페이지 */}          
                <Route path="/dashBoardMain" element={<DashBoardMain />}></Route>   {/* Dashboard 메인 페이지 */}          
                <Route path="/changeUserData" element={<ChangeUserDataMain />}></Route>   {/* 회원정보 수정 페이지 */}   

                {/* TEST PAGE */}
                <Route path="/test" element={<TemplateTest />}></Route>             {/* 테스트 페이지 */}          
                <Route path="/testReact" element={<TestReactScript />}></Route> 
                <Route path="/testPage" element={<TestPage />}></Route> 
                <Route path="/hookTest" element={<HookTest />}></Route>
            </Routes> 
        </BrowserRouter>
     
    </div>
   
  );
}

export default App;

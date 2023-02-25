import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import TemplateTest from './pages/test/TemplateTest';
import LoginMain from './pages/login/LoginMain';
import JoinMain from './pages/join/JoinMain';
import DashBoardMain from './pages/dashboard/DashBoardMain';
import TestReactScript from './pages/test/TestReactScript';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TestPage from './pages/test/TestPage';
import HookTest from './pages/test/HookTest';
import LogoutMain from './pages/logout/Logout';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  // TODO 
  // 첫 메인 페이지에서 로그인 되었으면 --> DashBoard 페이지 로그인 안되었으면 Login Page 로 이동 시켜주기 !! 
  // dark mode / light mode 적용 구현 하기

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginMain />}></Route>                    {/* 처음 기본 Landing Page */}             
                <Route path="/login" element={<LoginMain />}></Route>               {/* 로그인 페이지 */}      
                <Route path="/join" element={<JoinMain />}></Route>                 {/* 회원가입 페이지 */}          
                <Route path="/dashBoardMain" element={<DashBoardMain />}></Route>   {/* Dashboard 메인 페이지 */}          
                <Route path="/logout" element={<LogoutMain />}></Route>             {/* Logout 페이지 */} 
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

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

  function JoinMain() {
    const BASE_URL = 'http://localhost:8082';
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
    };

    const [userData, setUserData] = useState({
        firstName : '',
        lastName : '',
        email: '',
        password: '',
    }); 

    const [isCheckConfirm, setIsCheckConfirm] = useState(false);
    const onChangeInputUserData = (e : any) => {
      setUserData({
          ...userData,
          [e.target.name] : e.target.value
      })
    }
    const checkJoinConfirm = () => {
      setIsCheckConfirm(!isCheckConfirm);
    }

    // TODO Validation Check 해주기 
    const onClickSignUp = async () => {
      console.log('AFTER CLICK IS CHECK BUTTON : ' + isCheckConfirm); 
      console.log('ON CLICK SIGN UP BUTTON CLICK TEST !');
      console.log('is check confirm button data : ' + isCheckConfirm);
      console.log('ON SIGN CLICI UP DATA : ' + JSON.stringify(userData));

      if(userData.email == '' || userData.firstName == '' || userData.lastName == '' || userData.password == '') {
        alert('회원가입 정보를 다시 한번 확인 해 주세요.');
        return false;
      }

      console.log('IS CHECK CONFIRM TEST DATA : ' + isCheckConfirm);

      if(!isCheckConfirm) {
        alert('동의가 필요합니다.');
        return false;
      }

      // 회원가입 구현 하여주기 !
      await axios.post('/api/userJoin', userData)
        .then((res) => {
            let joinResult = res.data.RESULT;
            if(joinResult == 'USER_EXIST') {
              alert('이미 존재하는 사용자 이메일 입니다.');
              return false;
            }
            if(joinResult = 'JOIN_SUCEESS') {
              alert('회원 가입이 되었습니다. 로그인 해주세요 !');
              navigate("/login");
            }
          }).catch((err) => {
            let joinResult = err.data.RESULT;
            console.log('AXIOS ERR CHECK VALUE : ' + JSON.stringify(err));
            if(joinResult = 'JOIN_FAIL') {
              alert('회원 가입에 실패하였습니다 ! 다시 시도해 주세요 !');
            } 
        })
    }

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    onChange={onChangeInputUserData}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={onChangeInputUserData}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={onChangeInputUserData}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={onChangeInputUserData}
                  />
                </Grid>
                <Grid item xs={12} onClick={checkJoinConfirm}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onClickSignUp}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    );
  }

  export default JoinMain;


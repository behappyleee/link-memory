import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { secondaryListItems } from './ListItems';
import MainListItems from './ListItems';
import DashBoardMainContents from './DashBoardMainContents';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const drawerWidth: number = 240;

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  const mdTheme = createTheme();

  function DashBoardMain(props: any) {
    const [open, setOpen] = React.useState(true);
    const [contentsIndex, setContentsIndex] = useState(0);
    const [openLogoutConfirm, setLogoutConfirm] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
      setOpen(!open);
    };

    const setLogout = () => {
      setLogoutConfirm(true);
    }
    const closeLogoutConfirm = () => {
      setLogoutConfirm(false);
    }
    const currentUserLogout = () => {
      axios.get('/api/logout')
        .then((res) => {
          let logoutResult: string = res.data.LOGOUT_RESULT;
          if(logoutResult === 'SUCCESS') {
            alert('정상적으로 로그아웃이 되었습니다!');          
            navigate("/");
            return true;
          } 

          alert('로그아웃에 실패하였습니다. 잠시후 다시 이용해 주세요!');
          return false;
        }).catch((err) => {
          console.log('currentUserLogout ERR : ' + JSON.stringify(err));
          alert('로그아웃에 실패하였습니다 !');
          return false;
        })
    }

    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                링크메모리
              </Typography>
              
              <Button variant="contained" color="secondary" onClick={setLogout}>
                LOGOUT
              </Button>
              <Button variant="contained" color="secondary" href="/changeUserData">
                회원정보 수정
              </Button> 
              <Dialog
                open={openLogoutConfirm}
                onClose={closeLogoutConfirm}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              > 
                <DialogTitle id="alert-dialog-title">
                  {"로그아웃을 하시겠습니까 ?"}
                </DialogTitle>
                 <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    로그아웃을 하시려면 로그아웃을 버튼을 눌러주세요.
                  </DialogContentText>
                </DialogContent> 
                <DialogActions>
                  <Button onClick={currentUserLogout} autoFocus>로그아웃</Button>
                  <Button onClick={closeLogoutConfirm}>취소</Button>
                  {/* <Button onClick={closeLogoutConfirm}>Disagree</Button>
                  <Button onClick={currentUserLogout} autoFocus>Agree</Button> */}
                </DialogActions>
              </Dialog>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
               <MainListItems contentsIndex={setContentsIndex} /> 
              <Divider sx={{ my: 1 }} />
              {secondaryListItems}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <DashBoardMainContents contentsIndex={contentsIndex} />
            {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                {/* <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                    //   p: 2,
                    //   display: 'flex',
                    //   flexDirection: 'column',
                    //   height: 240,
                    }}
                  >
                    <Chart />
                  </Paper>
                </Grid> */}
                {/* Recent Deposits */}
                {/* <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Deposits />
                  </Paper>
                </Grid> */}
                {/* Recent Orders */}
                {/* <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Orders />
                  </Paper>
                </Grid> */}
              {/* </Grid> */}
              <Copyright sx={{ pt: 4 }} />
            {/* </Container>  */}
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
  
  export default function Dashboard() {
    return <DashBoardMain />;
  }

import React, {useRef} from 'react';
import { styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import BrushIcon from '@mui/icons-material/Brush';
import Logo from './Logo';
import LogoSrc from './assets/logo.png';
import { Button } from '@mui/material';
import customTheme from '../style/customTheme';
import HeaderDrawer from './HeaderDrawer';
import LoginIcon from '@mui/icons-material/Login';
import Login from './Login';
import Modal from '@mui/material/Modal';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = (props) => {
  const themeList = [customTheme.pinkTheme, customTheme.blueTheme];
  let number = useRef(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLogin, setLogin] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const [isLoginOpen, setLoginOpen] = React.useState(false); 

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChangeThemeButton = () =>{
    number.current = number.current+1;
    props.setTheme(themeList[number.current%themeList.length])
  }

  const handleLogin = () =>{
    // console.log('Login click');
    setLoginOpen(true);
  }
  const handleClose = () => setLoginOpen(false);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Page</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <HeaderDrawer />
          <Logo src={LogoSrc}/>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton onClick={handleChangeThemeButton} size="large" color="inherit">
              <Badge color="error">
                <BrushIcon/>
              </Badge>
            </IconButton>
            {isLogin ?
           (<>
           <IconButton size="large" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </>
           ) : (
            <IconButton onClick={handleLogin} size="large" color="inherit">
            <Badge color="error">
              <LoginIcon />
              <Typography>  Login</Typography>
            </Badge>
          </IconButton>
           )
            }
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
    <Login
      open={isLoginOpen}
      onClose={handleClose}
      setLoginOpen={setLoginOpen}
    />
     {/* <Modal
        open={isLoginOpen}
        onClose={handleClose}
        // sx={{bgcolor:'white', backgroundColor:'white'}}
      >
        <Box>
         Header
        </Box>
      </Modal> */}
    </>
  );
}

export default Header
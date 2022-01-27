import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {useContext} from "react";
import {UserContext} from "../Contexts/UserContext";


const pages = ['Home', 'Upload'];
const my_contents = ['All contents', 'Summary', 'Flash Cards'];
const accounts = ['Settings', 'Log out'];

const Global_MenuBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElContent, setAnchorElContent] = React.useState(null);
    let [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    let [user, setUser] = useContext(UserContext);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleOpenContentMenu = (event) => {
        setAnchorElContent(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleCloseContentMenu = () => {
        setAnchorElContent(null);
    };

    return (
            <AppBar
            position="relative"
            style={{background: '#5178B2',
        width: "100.85%",
        height: "100%",
        marginLeft: -8,
        marginTop: -10}}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Box sx={{
                        width: 1/16,
                        display: { xs: 'flex', xl: 'flex' }
                        }} >
                        <Typography
                            fontSize={'1.1vw'}
                            noWrap
                            component="div"
                            sx={{ mx: "auto", display: { xs: 'block', xl: 'flex' } }}
                        >
                            BRIDGE
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', xl: 'none' } }} >
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',

                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'flex', xl: 'flex' },
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', xl: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={() => {setCurrentPage(page)}}
                            sx={{ my: 2, color: 'white', display: 'flex' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>

                    <Box sx={{
                        flexGrow: 1 ,
                        whiteSpace: 'pre' }}>
                        <Tooltip title="My Contents">
                        <Button onClick={() => {setCurrentPage("Task List")}} color="inherit" >
                        My Content
                        </Button>
                        </Tooltip>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {user != null && <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" />
                            </IconButton>
                        </Tooltip>}
                        {user == null &&  <Button onClick={() => {setCurrentPage("Log in")}} color="inherit" >
                            Login
                        </Button>}
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {accounts.map((account) => (
                            <MenuItem key={account} onClick={() => {
                                if(account === 'Log out'){
                                    setUser(null);
                                    handleCloseUserMenu();
                                }else if(account === 'Settings'){
                                    alert("Opened settings");
                                    handleCloseUserMenu();
                                }
                                }
                            }>
                            <Typography textAlign="center">{account}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>

      );
    };
export default Global_MenuBar;

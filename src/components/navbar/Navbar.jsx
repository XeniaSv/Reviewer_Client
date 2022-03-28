import React, {useContext} from 'react';
import useStyles from './stylesNavbar'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Search} from "@mui/icons-material";
import {Link} from 'react-router-dom';
import {Grid, TextField} from "@mui/material";
import {AuthContext} from "../../context/authContext/AuthContext";
import {logout} from "../../context/authContext/AuthActions";


const Navbar = () => {
    const {user, dispatch} = useContext(AuthContext);

    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        handleCloseUserMenu();
        dispatch(logout());
    }

    return (
        <AppBar className={classes.back}>
            <Toolbar>
                <Grid className={classes.container} container>
                    <Grid>
                        <Link to="/" className="link">
                            <Button
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                HomePage
                            </Button>
                        </Link>
                    </Grid>


                    <Grid xs={6}>
                        <TextField sx={{mt: '10px', input: {color: 'white'}}} className={classes.search} size="small"
                                   label="Search" variant="outlined"/>
                        <IconButton aria-label="upload picture" component="span">
                            <Search className={classes.searchIcon}/>
                        </IconButton>
                    </Grid>

                    <Grid>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
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
                            <Link to="/userPage" className="link">
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                            </Link>
                            {user?.user.isAdmin ?
                                <Link to="/admin" className="link">
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Admin</Typography>
                                    </MenuItem>
                                </Link> :
                                <></>
                            }
                            <MenuItem onClick={handleLogout}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
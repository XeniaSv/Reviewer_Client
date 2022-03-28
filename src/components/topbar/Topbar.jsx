import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';
import Popper from '@mui/material/Popper';
import {Link} from 'react-router-dom';
import useStyles from "./stylesTopbar";
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';




export default function Topbar() {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

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

    return (

        <div className={classes.topbar}>
            <div className={classes.topbarWrapper}>
                <div>
                    <span className={classes.menu}>

                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{mr: 2}}
                            onClick={handleToggle}
                            ref={anchorRef}
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                        >
                            <MenuIcon className={classes.menu}/>
                        </IconButton>
                         <Popper
                             open={open}
                             anchorEl={anchorRef.current}
                             role={undefined}
                             placement="bottom-start"
                             transition
                             disablePortal

                         >
          {({TransitionProps, placement}) => (
              <Grow
                  {...TransitionProps}
                  style={{
                      transformOrigin:
                          placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
              >
                  <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                              className={classes.menuList}
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                          >
                              <MenuItem onClick={handleClose}>
                                  <Link to="/admin" className="link">
                                      Start
                                  </Link>
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <Link to="/adminUsers" className="link">
                                      Users List
                                  </Link></MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <Link to="/adminMovies" className="link">
                                      Movies List
                                  </Link>
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <Link to="/adminSeries" className="link">
                                      Series List
                                  </Link>
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <Link to="/adminBooks" className="link">
                                      Books List
                                  </Link>
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                  <Link to="/" className="link">
                                      Homepage
                                  </Link>
                              </MenuItem>
                          </MenuList>
                      </ClickAwayListener>
                  </Paper>
              </Grow>
          )}
        </Popper>
                    </span>


                    <span className={classes.logo}>Reviewer admin</span>
                </div>
            </div>

        </div>
    );
}

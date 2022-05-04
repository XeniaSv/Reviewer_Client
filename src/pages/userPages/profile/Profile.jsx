import {useContext, useState, useRef} from 'react';
import Avatar from "@mui/material/Avatar";
import {Box} from "@mui/material";
import TextField from '@mui/material/TextField';
import useStyles from './stylesProfile'
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {AuthContext} from "../../../context/authContext/AuthContext";

function Profile() {
    const classes = useStyles();
    const {user} = useContext(AuthContext);

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

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

    return (
        <div className={classes.profile}>
            <div className={classes.menu}>
                <Button
                    size="small"
                    variant="contained"
                    edge="start"
                    aria-label="menu"
                    onClick={handleToggle}
                    ref={anchorRef}
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    className={classes.menuButton}
                >
                    Меню
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    style={{zIndex: 999}}
                    className={classes.menuItemContainer}


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
                                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                                            <Link to="/userPage" className="link">
                                                Профиль
                                            </Link>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                                            <Link to="/movieReviews" className="link">
                                                Рецензии на фильмы
                                            </Link></MenuItem>
                                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                                            <Link to="/seriesReviews" className="link">
                                                Рецензии на сериалы
                                            </Link>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                                            <Link to="/bookReviews" className="link">
                                                Рецензии на книги
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
            <Avatar
                alt="Remy Sharp"
                src="https://avatars.mds.yandex.net/get-pdb/1996600/d1725ec1-41d3-4b2c-ab24-91ec603557bf/s375"
                className={classes.avatar}
            />
            <Box className={classes.container}
            >
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Имя"
                    value={user.user.username}
                    variant="standard"
                />
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Почта"
                    value={user.user.email}
                    variant="standard"
                />
            </Box>
        </div>
    );
}

export default Profile;
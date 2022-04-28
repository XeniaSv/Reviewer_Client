import React, {useContext, useEffect, useState} from 'react';
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
import {Link, useHistory} from 'react-router-dom';
import {Autocomplete, Grid, TextField} from "@mui/material";
import {AuthContext} from "../../context/authContext/AuthContext";
import {logout} from "../../context/authContext/AuthActions";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import {alpha, styled} from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import {MovieContext} from "../../context/movieContext/MovieContext";
import {SeriesContext} from "../../context/seriesContext/SeriesContext";
import {BookContext} from "../../context/bookContext/BookContext";
import {getMovies} from "../../context/movieContext/apiCalls";
import {getBooks} from "../../context/bookContext/apiCalls";
import {getSeries} from "../../context/seriesContext/apiCalls";
import {bookTags, tags} from "../../tags";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


const Navbar = () => {
    const history = useHistory();

    const classes = useStyles();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [radioValue, setRadioValue] = useState('movie');
    const [search, setSearch] = useState([]);
    const [searchValue, setSearchValue] = useState(null);

    const {user, dispatch} = useContext(AuthContext);
    const {dispatch: movieDispatch} = useContext(MovieContext);
    const {dispatch: seriesDispatch} = useContext(SeriesContext);
    const {dispatch: booksDispatch} = useContext(BookContext);
    const open = Boolean(anchorEl);

    const itemTags = tags.concat(bookTags.filter((item) => !tags.find(f => f.title === item.title)));

    useEffect(async () => {
        switch (radioValue) {
            case 'movie':
                const resMovie = await getMovies(movieDispatch);
                setSearch(resMovie.data);
                break;
            case 'series':
                const resSeries = await getSeries(seriesDispatch);
                setSearch(resSeries.data);
                break;
            case 'book':
                const resBook = await getBooks(booksDispatch);
                setSearch(resBook.data);
                break;
            case 'review':
                setSearch(itemTags);
                break;
        }
    }, [radioValue]);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        handleCloseUserMenu();
        dispatch(logout());
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRadioChange = (e) => {
        setRadioValue(e.target.value);
        setSearchValue(null);
    };

    const handleSearchClick = () => {
        if (searchValue == null) {
            alert('Такого предмета категории нет');
            return;
        }

        if (radioValue !== 'review') {
            history.push(`/itemPage?type=${radioValue}&id=${searchValue.id}`);
            return;
        }

        history.push(`/search?tag=${searchValue.title}`);
    };

    const handleSearchChange = (e, newValue) => {
        setSearchValue(newValue);
    };

    return (
        <AppBar className={classes.back}>
            <Toolbar className={classes.toolbar}>
                <Grid className={classes.container} container>
                    <Grid>
                        <Link to="/" className="link">
                            <Button
                                className={classes.homepageBtn}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                ГЛАВНАЯ
                            </Button>
                        </Link>
                    </Grid>

                    <Grid>
                        <div>
                            <Button
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="outline"
                                disableElevation
                                className={classes.optionSearch}
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDownIcon className={classes.optionIcon}/>}
                            >
                                Опции поиска
                            </Button>
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <RadioGroup name="use-radio-group" onChange={handleRadioChange} value={radioValue}
                                            defaultValue="movie">
                                    <FormControlLabel className={classes.radio} value="movie"
                                                      control={<Radio className={classes.radioButton}/>}
                                                      label="Найти фильм"/>
                                    <FormControlLabel className={classes.radio} value="series"
                                                      control={<Radio className={classes.radioButton}/>}
                                                      label="Найти сериал"/>
                                    <FormControlLabel className={classes.radio} value="book"
                                                      control={<Radio className={classes.radioButton}/>}
                                                      label="Найти книгу"/>
                                    <FormControlLabel className={classes.radio} value="review"
                                                      control={<Radio className={classes.radioButton}/>}
                                                      label="Найти рецензии по тэгу"/>
                                </RadioGroup>

                            </StyledMenu>
                        </div>
                    </Grid>


                    <Grid container xs={6}>
                        <Grid xs={10}>
                            <Autocomplete
                                value={searchValue}
                                onChange={handleSearchChange}
                                className={classes.search}
                                options={search}
                                getOptionLabel={option => option.title}
                                popupIcon={<ArrowDropDownIcon className={classes.arrowDownSearch}/>}
                                renderInput={(params) =>
                                    <TextField {...params}
                                               sx={{mt: '10px', input: {color: 'white'}}}
                                               size="small"
                                               label="Поиск"
                                               variant="outlined"/>
                                }
                            />

                        </Grid>
                        <Grid xs={1}>
                            <IconButton onClick={handleSearchClick} aria-label="upload picture" component="span">
                                <Search className={classes.searchIcon}/>
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Tooltip title="Open settings">
                            <IconButton className={classes.avatar} onClick={handleOpenUserMenu}>
                                <Avatar className={classes.avatarIcon} alt="Remy Sharp"
                                        src="https://avatars.mds.yandex.net/get-pdb/1996600/d1725ec1-41d3-4b2c-ab24-91ec603557bf/s375"/>
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
                                <MenuItem className={classes.menuItem} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Профиль</Typography>
                                </MenuItem>
                            </Link>
                            {user?.user.isAdmin ?
                                <Link to="/admin" className="link">
                                    <MenuItem className={classes.menuItem} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Администратор</Typography>
                                    </MenuItem>
                                </Link> :
                                <></>
                            }

                            {(innerWidth <= 689) &&
                            <Link to="/" className="link">
                                <MenuItem className={classes.menuItem} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Главная</Typography>
                                </MenuItem>
                            </Link>
                            }
                            <MenuItem className={classes.menuItem} onClick={handleLogout}>
                                <Typography textAlign="center">Выйти</Typography>
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
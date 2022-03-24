import * as React from 'react';
import {LineStyle, LiveTv, LocalMovies, MenuBook, PermIdentity} from "@mui/icons-material";
import useStyles from './stylesSidebarAdmin'
import {Link} from "react-router-dom";


export default function SidebarAdmin() {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarWrapper}>
                <div className={classes.sidebarMenu}>
                    <ul className={classes.sidebarList}>
                        <Link to="/admin" className="link">
                            <li className={classes.sidebarListItem} active>
                                <LineStyle className={classes.sidebarIcon}/>
                                Start
                            </li>
                        </Link>
                        <Link to="/adminUsers" className="link">
                            <li className={classes.sidebarListItem}>
                                <PermIdentity className={classes.sidebarIcon}/>
                                Users
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={classes.sidebarMenu}>
                    <h3 className={classes.sidebarTitle}>Menu</h3>
                    <ul className={classes.sidebarList}>
                        <Link to="/adminMovies" className="link">
                            <li className={classes.sidebarListItem}>
                                <LocalMovies className={classes.sidebarIcon}/>
                                Movies
                            </li>
                        </Link>
                        <Link to="/adminSeries" className="link">
                            <li className={classes.sidebarListItem}>
                                <LiveTv className={classes.sidebarIcon}/>
                                Series
                            </li>
                        </Link>
                        <Link to="/adminBooks" className="link">
                            <li className={classes.sidebarListItem}>
                                <MenuBook className={classes.sidebarIcon}/>
                                Books
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={classes.sidebarMenu}>
                    <h3 className={classes.sidebarTitle}>Return</h3>
                    <ul className={classes.sidebarList}>
                        <Link to="/" className="link">
                            <li className={classes.sidebarListItem}>
                                <LineStyle className={classes.sidebarIcon}/>
                                Homepage
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
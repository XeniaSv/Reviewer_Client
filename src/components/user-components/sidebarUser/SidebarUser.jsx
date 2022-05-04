import {LiveTv, LocalMovies, MenuBook, PermIdentity} from "@mui/icons-material";
import {Link} from "react-router-dom";
import useStyles from './stylesSidebarUser'


export default function SidebarUser() {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarWrapper}>
                <div className={classes.sidebarMenu}>
                    <ul className={classes.sidebarList}>
                        <Link to="/userPage" className="link">
                            <li className={classes.sidebarListItem} active>
                                <PermIdentity className={classes.sidebarIcon}/>
                                Профиль
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={classes.sidebarMenu}>
                    <h3 className={classes.sidebarTitle}>Обзоры</h3>
                    <ul className={classes.sidebarList}>
                        <Link to="/movieReviews" className="link">
                            <li className={classes.sidebarListItem}>
                                <LocalMovies className={classes.sidebarIcon}/>
                                Фильмы
                            </li>
                        </Link>
                        <Link to="/seriesReviews" className="link">
                            <li className={classes.sidebarListItem}>
                                <LiveTv className={classes.sidebarIcon}/>
                                Сериалы
                            </li>
                        </Link>
                        <Link to="/bookReviews" className="link">
                            <li className={classes.sidebarListItem}>
                                <MenuBook className={classes.sidebarIcon}/>
                                Книги
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

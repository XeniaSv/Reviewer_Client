import "./sidebar.css";
import {List, LiveTv, LocalMovies, MenuBook, PermIdentity} from "@mui/icons-material";
import {Link} from "react-router-dom";


export default function SidebarUser() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/userPage" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon"/>
                                Profile
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Reviews</h3>
                    <ul className="sidebarList">
                        <Link to="/movieReviews" className="link">
                            <li className="sidebarListItem">
                                <LocalMovies className="sidebarIcon"/>
                                Movies
                            </li>
                        </Link>
                        <Link to="/seriesReviews" className="link">
                            <li className="sidebarListItem">
                                <LiveTv className="sidebarIcon"/>
                                Series
                            </li>
                        </Link>
                        <Link to="/bookReviews" className="link">
                            <li className="sidebarListItem">
                                <MenuBook className="sidebarIcon"/>
                                Books
                            </li>
                        </Link>
                        <Link to="/lists" className="link">
                            <li className="sidebarListItem">
                                <List className="sidebarIcon"/>
                                Lists
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

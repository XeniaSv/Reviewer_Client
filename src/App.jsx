import './App.scss';
import Home from "./pages/home/Home";
import ItemPage from "./pages/itemPage/ItemPage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/authContext/AuthContext";
import UserPage from "./pages/userPage/UserPage";
import MovieReviews from "./pages/userPages/movieReviews/MovieReviews";
import SeriesReviews from "./pages/userPages/seriesReviews/SeriesReviews";
import BookReviews from "./pages/userPages/bookReviews/BookReviews";
import AdminPage from "./pages/adminPage/AdminPage";
import UserList from "./pages/adminPages/userList/UserList";
import MovieList from "./pages/adminPages/movieList/MovieList";
import NewItem from "./pages/adminPages/newItem/NewItem";
import BookList from "./pages/adminPages/bookList/BookList";
import SeriesList from "./pages/adminPages/seriesList/SeriesList";


function App() {
    const {user} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {user ? <Home/> : <Redirect to='/register'/>}
                </Route>
                <Route path="/register">
                    {!user ? <Register/> : <Redirect to='/login'/>}
                </Route>
                <Route path="/login">
                    {!user ? <Login/> : <Redirect to="/"/>}
                </Route>

                {user && (
                    <>
                        <Route path="/movies">
                            <Home type='movie'/>
                        </Route>
                        <Route path="/series">
                            <Home type='series'/>
                        </Route>
                        <Route path="/itemPage">
                            <ItemPage/>
                        </Route>
                        <Route path="/userPage">
                            <UserPage/>
                        </Route>
                        <Route path="/movieReviews">
                            <MovieReviews/>
                        </Route>
                        <Route path="/seriesReviews">
                            <SeriesReviews/>
                        </Route>
                        <Route path="/bookReviews">
                            <BookReviews/>
                        </Route>

                        <Route path="/admin">
                            <AdminPage/>
                        </Route>
                        <Route path="/admin/users">
                            <UserList/>
                        </Route>
                        <Route path="/admin/movies">
                            <MovieList/>
                        </Route>
                        <Route path="/admin/books">
                            <BookList/>
                        </Route>
                        <Route path="/admin/series">
                            <SeriesList/>
                        </Route>
                        <Route path='/admin/newItem'>
                            <NewItem/>
                        </Route>
                    </>
                )}

                {/*{user.user.isAdmin && (*/}
                {/*    <>*/}
                {/*        <Route path="/admin">*/}
                {/*            <AdminPage/>*/}
                {/*        </Route>*/}
                {/*        <Route path="/admin/users">*/}
                {/*            <UserList/>*/}
                {/*        </Route>*/}
                {/*        <Route path="/admin/movies">*/}
                {/*            <MovieList/>*/}
                {/*        </Route>*/}
                {/*        <Route path="/admin/books">*/}
                {/*            <BookList/>*/}
                {/*        </Route>*/}
                {/*        <Route path="/admin/series">*/}
                {/*            <SeriesList/>*/}
                {/*        </Route>*/}
                {/*        <Route path='/admin/newItem'>*/}
                {/*            <NewItem/>*/}
                {/*        </Route>*/}
                {/*    </>*/}
                {/*)}*/}
            </Switch>
        </BrowserRouter>
    );
}

export default App;

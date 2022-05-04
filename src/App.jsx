import './App.scss';
import Home from "./pages/general-pages/home/Home";
import ItemPage from "./pages/general-pages/itemPage/ItemPage";
import Register from "./pages/general-pages/register/Register";
import Login from "./pages/general-pages/login/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/authContext/AuthContext";
import UserPage from "./pages/user-pages/userPage/UserPage";
import MovieReviews from "./pages/user-pages/movieReviews/MovieReviews";
import SeriesReviews from "./pages/user-pages/seriesReviews/SeriesReviews";
import BookReviews from "./pages/user-pages/bookReviews/BookReviews";
import AdminPage from "./pages/admin-pages/adminPage/AdminPage";
import UserList from "./pages/admin-pages/userList/UserList";
import MovieList from "./pages/admin-pages/movieList/MovieList";
import NewItem from "./pages/admin-pages/newItem/NewItem";
import BookList from "./pages/admin-pages/bookList/BookList";
import SeriesList from "./pages/admin-pages/seriesList/SeriesList";
import UpdateItem from "./pages/admin-pages/updateItem/UpdateItem";
import UpdateReview from "./pages/user-pages/updateReview/UpdateReview";
import SearchPage from "./pages/general-pages/searchPage/SearchPage";


function App() {
    const {user} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/register">
                    {!user ? <Register/> : <Redirect to={"/userPage"}/>}
                </Route>
                <Route path="/login">
                    {!user ? <Login/> : <Redirect to={"/userPage"}/>}
                </Route>
                <Route path='/search'>
                    <SearchPage/>
                </Route>
                <Route path="/itemPage">
                    <ItemPage/>
                </Route>

                {!user?.user.isAdmin ?
                    <>
                        <Route path="/userPage">
                            {user ? <UserPage/> : <Redirect to='/register'/>}
                        </Route>
                        <Route path="/movieReviews">
                            {user ? <MovieReviews/> : <Redirect to='/register'/>}
                        </Route>
                        <Route path="/seriesReviews">
                            {user ? <SeriesReviews/> : <Redirect to='/register'/>}
                        </Route>
                        <Route path="/bookReviews">
                            {user ? <BookReviews/> : <Redirect to='/register'/>}
                        </Route>
                        <Route path='/userUpdateReview'>
                            {user ? <UpdateReview/> : <Redirect to={'/register'}/>}
                        </Route>
                    </>
                    :
                    <>
                        <Route path="/userPage">
                            {user ? <UserPage/> : <Redirect to='/register'/>}
                        </Route>
                        <Route path="/movieReviews">
                            {user ? <MovieReviews/> : <Redirect to='/register'/>}
                        </Route>
                        <Route path="/seriesReviews">
                            {user ? <SeriesReviews/> : <Redirect to='/register'/>}
                        </Route>
                        <Route path="/bookReviews">
                            {user ? <BookReviews/> : <Redirect to='/register'/>}
                        </Route>
                        <Route path='/userUpdateReview'>
                            {user ? <UpdateReview/> : <Redirect to='/register'/>}
                        </Route>

                        <Route path="/admin">
                            <AdminPage/>
                        </Route>
                        <Route path="/adminUsers">
                            <UserList/>
                        </Route>
                        <Route path="/adminMovies">
                            <MovieList/>
                        </Route>
                        <Route path="/adminBooks">
                            <BookList/>
                        </Route>
                        <Route path="/adminSeries">
                            <SeriesList/>
                        </Route>
                        <Route path='/adminNewItem'>
                            <NewItem/>
                        </Route>
                        <Route path='/adminUpdateItem'>
                            <UpdateItem/>
                        </Route>
                    </>
                }


                {/*{!user?.user.isAdmin ?*/}
                {/*    <>*/}
                {/*        <Route path="/itemPage">*/}
                {/*            {user ? <ItemPage/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path="/userPage">*/}
                {/*            {user ? <UserPage/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path="/movieReviews">*/}
                {/*            {user ? <MovieReviews/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path="/seriesReviews">*/}
                {/*            {user ? <SeriesReviews/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path="/bookReviews">*/}
                {/*            {user ? <BookReviews/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path='/userUpdateReview'>*/}
                {/*            <UpdateReview/>*/}
                {/*        </Route>*/}
                {/*        <Route path='/search'>*/}
                {/*            <SearchPage/>*/}
                {/*        </Route>*/}

                {/*    </>*/}
                {/*    :*/}
                {/*    <>*/}
                {/*        <Route path="/itemPage">*/}
                {/*            {user ? <ItemPage/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path="/userPage">*/}
                {/*            {user ? <UserPage/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path="/movieReviews">*/}
                {/*            {user ? <MovieReviews/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path="/seriesReviews">*/}
                {/*            {user ? <SeriesReviews/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path="/bookReviews">*/}
                {/*            {user ? <BookReviews/> : <Redirect to='/register'/>}*/}
                {/*        </Route>*/}
                {/*        <Route path='/userUpdateReview'>*/}
                {/*            <UpdateReview/>*/}
                {/*        </Route>*/}

                {/*        <Route path='/search'>*/}
                {/*            <SearchPage/>*/}
                {/*        </Route>*/}


                {/*        <Route path="/admin">*/}
                {/*            <AdminPage/>*/}
                {/*        </Route>*/}
                {/*        <Route path="/adminUsers">*/}
                {/*            <UserList/>*/}
                {/*        </Route>*/}
                {/*        <Route path="/adminMovies">*/}
                {/*            <MovieList/>*/}
                {/*        </Route>*/}
                {/*        <Route path="/adminBooks">*/}
                {/*            <BookList/>*/}
                {/*        </Route>*/}
                {/*        <Route path="/adminSeries">*/}
                {/*            <SeriesList/>*/}
                {/*        </Route>*/}
                {/*        <Route path='/adminNewItem'>*/}
                {/*            <NewItem/>*/}
                {/*        </Route>*/}
                {/*        <Route path='/adminUpdateItem'>*/}
                {/*            <UpdateItem/>*/}
                {/*        </Route>*/}


                {/*    </>*/}
                {/*}*/}
            </Switch>
        </BrowserRouter>
    );
}

export default App;

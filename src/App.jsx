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
import UpdateItem from "./pages/adminPages/updateItem/UpdateItem";
import UpdateReview from "./pages/userPages/updateReview/UpdateReview";
import SearchPage from "./pages/searchPage/SearchPage";


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


                {!user?.user.isAdmin ?
                    <>
                        <Route path="/itemPage">
                            {user ? <ItemPage/> : <Redirect to='/register'/>}
                        </Route>
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
                            <UpdateReview/>
                        </Route>
                        <Route path='/search'>
                            <SearchPage/>
                        </Route>

                    </>
                    :
                    <>
                        <Route path="/itemPage">
                            {user ? <ItemPage/> : <Redirect to='/register'/>}
                        </Route>
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
                            <UpdateReview/>
                        </Route>

                        <Route path='/search'>
                            <SearchPage/>
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
            </Switch>
        </BrowserRouter>
    );
}

export default App;

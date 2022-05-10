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
import Navbar from "./components/general-components/navbar/Navbar";
import * as React from "react";


function App() {
    const {user} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <>
                        <Navbar/>
                        <Home/>
                    </>
                </Route>
                <Route path="/register">
                    {!user ? <Register/> : <Redirect to="/userPage"/>}
                </Route>
                <Route path="/login">
                    {!user ? <Login/> : <Redirect to="/userPage"/>}
                </Route>
                <Route path='/search'>
                    <>
                        <Navbar/>
                        <SearchPage/>
                    </>
                </Route>
                <Route path="/itemPage">
                    <>
                        <Navbar/>
                        <ItemPage/>
                    </>
                </Route>


                <Route path="/userPage">
                    {user ?
                        <>
                            <Navbar/>
                            <UserPage/>
                        </>
                        :
                        <Redirect to='/register'/>
                    }
                </Route>
                <Route path="/movieReviews">
                    {user ?
                        <>
                            <Navbar/>
                            <MovieReviews/>
                        </>
                        :
                        <Redirect to='/register'/>
                    }
                </Route>
                <Route path="/seriesReviews">
                    {user ?
                        <>
                            <Navbar/>
                            <SeriesReviews/>
                        </>
                        :
                        <Redirect to='/register'/>
                    }
                </Route>
                <Route path="/bookReviews">
                    {user ?
                        <>
                            <Navbar/>
                            <BookReviews/>
                        </>
                        :
                        <Redirect to='/register'/>
                    }
                </Route>
                <Route path='/updateReview'>
                    {user ?
                        <>
                            <Navbar/>
                            <UpdateReview/>
                        </>
                        :
                        <Redirect to='/register'/>
                    }
                </Route>

                <Route path="/admin">
                    {user?.user.isAdmin ? <AdminPage/> : <Redirect to='/register'/>}
                </Route>
                <Route path="/adminUsers">
                    {user?.user.isAdmin ? <UserList/> : <Redirect to='/register'/>}
                </Route>
                <Route path="/adminMovies">
                    {user?.user.isAdmin ? <MovieList/> : <Redirect to='/register'/>}
                </Route>
                <Route path="/adminBooks">
                    {user?.user.isAdmin ? <BookList/> : <Redirect to='/register'/>}
                </Route>
                <Route path="/adminSeries">
                    {user?.user.isAdmin ? <SeriesList/> : <Redirect to='/register'/>}
                </Route>
                <Route path='/adminNewItem'>
                    {user?.user.isAdmin ? <NewItem/> : <Redirect to='/register'/>}
                </Route>
                <Route path='/adminUpdateItem'>
                    {user?.user.isAdmin ? <UpdateItem/> : <Redirect to='/register'/>}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

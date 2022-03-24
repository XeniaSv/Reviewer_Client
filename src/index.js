import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthContextProvider} from "./context/authContext/AuthContext";
import {MovieContextProvider} from "./context/movieContext/MovieContext";
import {SeriesContextProvider} from "./context/seriesContext/SeriesContext";
import {BookContextProvider} from "./context/bookContext/BookContext";

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <MovieContextProvider>
                <SeriesContextProvider>
                    <BookContextProvider>
                        <App/>
                    </BookContextProvider>
                </SeriesContextProvider>
            </MovieContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

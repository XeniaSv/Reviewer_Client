import {
    createMovieFailure,
    createMovieStart,
    createMovieSuccess,
    deleteMovieFailure,
    deleteMovieStart,
    deleteMovieSuccess,
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess
} from "./MovieActions";
import $api from '../../http/index';

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await $api.get('/movies');
        dispatch(getMoviesSuccess(res.data))
    } catch (e) {
        dispatch(getMoviesFailure());
    }
};

//create
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
        const res = await $api.post("/movies", movie);
        dispatch(createMovieSuccess(res.data));
        return res;
    } catch (err) {
        dispatch(createMovieFailure());
        return err.response;
    }
};

//delete
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await $api.delete(`/movies/${id}`);
        dispatch(deleteMovieSuccess(id));
    } catch (e) {
        dispatch(deleteMovieFailure());
    }
};
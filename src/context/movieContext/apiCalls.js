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
        return res;
    } catch (e) {
        dispatch(getMoviesFailure());
    }
};

export const getMovie = async (id) => {
    try {
        return await $api.get(`/movies/${id}`);
    } catch (e) {
        return e.response;
    }
};

export const getMovieRating = async (id) => {
    try {
        return await $api.get(`/movies/rate/${id}`);
    } catch (e) {
        return e.response;
    }
};

export const getUserMovieRating = async (id, userId) => {
    try {
        return await $api.get(`/movies/rate/${userId}/${id}`)
    } catch (e) {
        return e.response;
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

//update
export const updateMovie = async (movie) =>{
    try {
        return await $api.put(`/movies/${movie.id}`, movie);
    } catch (err) {
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

//put
export const putMovieRating = async (movieId, rate, userId) => {
    try {
        return await $api.put(`/movies/rate/${movieId}`, {
            user: userId,
            item: movieId,
            onItem: 'Movie',
            rate: rate
        });
    } catch (e) {
        return e.response;
    }
};
import {
    createBookFailure,
    createBookStart,
    createBookSuccess,
    deleteBookFailure,
    deleteBookStart,
    deleteBookSuccess,
    getBooksFailure,
    getBooksStart,
    getBooksSuccess
} from "./BookActions";
import $api from '../../http/index';

export const getBooks = async (dispatch) => {
    dispatch(getBooksStart());
    try {
        const res = await $api.get('/books');
        dispatch(getBooksSuccess(res.data))
    } catch (e) {
        dispatch(getBooksFailure());
    }
};

//create
export const createBook = async (book, dispatch) => {
    dispatch(createBookStart());
    try {
        const res = await $api.post("/books", book);
        dispatch(createBookSuccess(res.data));
        return res;
    } catch (err) {
        dispatch(createBookFailure());
        return err.response;
    }
};

//delete
export const deleteBook = async (id, dispatch) => {
    dispatch(deleteBookStart());
    try {
        await $api.delete(`/books/${id}`);
        dispatch(deleteBookSuccess(id));
    } catch (e) {
        dispatch(deleteBookFailure());
    }
};
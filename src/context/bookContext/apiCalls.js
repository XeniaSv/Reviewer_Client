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

export const getBook = async (id) => {
    try {
        return await $api.get(`/books/${id}`);
    } catch (e) {
        return e.response;
    }
};

export const getBookRating = async (id) => {
    try {
        return await $api.get(`/books/rate/${id}`);
    } catch (e) {
        return e.response;
    }
};

export const getUserBookRating = async (id) => {
    try {
        return await $api.get(`/books/rate/${JSON.parse(localStorage.getItem('user')).user.id}/${id}`)
    } catch (e) {
        return e.response;
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

//put
export const putBookRating = async (bookId, rate) => {
    try {
        return await $api.put(`/books/rate/${bookId}`, {
            user: JSON.parse(localStorage.getItem('user')).user.id,
            item: bookId,
            onItem: 'Book',
            rate: rate
        });
    } catch (e) {
        return e.response;
    }
};
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
        dispatch(getBooksSuccess(res.data));
        return res;
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

export const getUserBookRating = async (id, userId) => {
    try {
        return await $api.get(`/books/rate/${userId}/${id}`)
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

//update
export const updateBook = async (book) =>{
    try {
        return await $api.put(`/books/${book.id}`, book);
    } catch (err) {
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
export const putBookRating = async (bookId, rate, userId) => {
    try {
        return await $api.put(`/books/rate/${bookId}`, {
            user: userId,
            item: bookId,
            onItem: 'Book',
            rate: rate
        });
    } catch (e) {
        return e.response;
    }
};
import BookReducer from './BookReducer';
import {createContext, useReducer} from "react";

const INITIAL_STATE = {
    books: [],
    isFetching: false,
    error: false,
};

export const BookContext = createContext(INITIAL_STATE);

export const BookContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(BookReducer, INITIAL_STATE);

    return (
        <BookContext.Provider
            value={{
                books: state.books,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}>
            {children}
        </BookContext.Provider>
    );
};
const BookReducer = (state, action) => {
    switch (action.type) {
        case "GET_BOOKS_START":
            return {
                books: [],
                isFetching: true,
                error: false,
            };
        case "GET_BOOKS_SUCCESS":
            return {
                books: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_BOOKS_FAILURE":
            return {
                books: [],
                isFetching: false,
                error: true,
            };
        case "CREATE_BOOKS_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "CREATE_BOOKS_SUCCESS":
            return {
                books: [...state.books, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_BOOKS_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "UPLOAD_BOOKS_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPLOAD_BOOKS_SUCCESS":
            return {
                books: state.books.map(
                    (book) => book.id === action.payload.id && action.payload
                ),
                isFetching: false,
                error: false,
            };
        case "UPLOAD_BOOKS_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "DELETE_BOOKS_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_BOOKS_SUCCESS":
            return {
                books: state.books.filter((book) => book.id !== action.payload),
                isFetching: false,
                error: false,
            };
        case "DELETE_BOOKS_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        default:
            return {...state};
    }
};

export default BookReducer;
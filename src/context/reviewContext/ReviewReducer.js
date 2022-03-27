const ReviewReducer = (state, action) => {
    switch (action.type) {
        case "GET_REVIEWS_START":
            return {
                reviews: [],
                isFetching: true,
                error: false,
            };
        case "GET_REVIEWS_SUCCESS":
            return {
                reviews: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_REVIEWS_FAILURE":
            return {
                reviews: [],
                isFetching: false,
                error: true,
            };
        case "CREATE_REVIEW_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "CREATE_REVIEW_SUCCESS":
            return {
                reviews: [...state.movies, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_REVIEW_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "DELETE_REVIEW_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_REVIEW_SUCCESS":
            return {
                reviews: state.reviews.filter((review) => review.id !== action.payload),
                isFetching: false,
                error: false,
            };
        case "DELETE_REVIEW_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        default:
            return {...state};
    }
};

export default ReviewReducer;
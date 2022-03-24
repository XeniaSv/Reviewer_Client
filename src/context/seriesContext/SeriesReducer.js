const SeriesReducer = (state, action) => {
    switch (action.type) {
        case "GET_SERIES_START":
            return {
                series: [],
                isFetching: true,
                error: false,
            };
        case "GET_SERIES_SUCCESS":
            return {
                series: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_SERIES_FAILURE":
            return {
                series: [],
                isFetching: false,
                error: true,
            };
        case "CREATE_SERIES_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "CREATE_SERIES_SUCCESS":
            return {
                series: [...state.series, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_SERIES_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "UPLOAD_SERIES_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPLOAD_SERIES_SUCCESS":
            return {
                series: state.series.map(
                    (series) => series._id === action.payload.id && action.payload
                ),
                isFetching: false,
                error: false,
            };
        case "UPLOAD_SERIES_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case "DELETE_SERIES_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_SERIES_SUCCESS":
            return {
                series: state.series.filter((series) => series.id !== action.payload),
                isFetching: false,
                error: false,
            };
        case "DELETE_SERIES_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        default:
            return {...state};
    }
};

export default SeriesReducer;
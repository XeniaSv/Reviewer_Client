//get
export const getReviewsStart = () => ({
    type: "GET_REVIEWS_START",
});
export const getReviewsSuccess = (movies) => ({
    type: "GET_REVIEWS_SUCCESS",
    payload: movies,
});
export const getReviewsFailure = () => ({
    type: "GET_REVIEWS_FAILURE",
});


//create
export const createReviewStart = () => ({
    type: "CREATE_REVIEW_START",
});

export const createReviewSuccess = (movie) => ({
    type: "CREATE_REVIEW_SUCCESS",
    payload: movie,
});

export const createReviewFailure = () => ({
    type: "CREATE_REVIEW_FAILURE",
});


//update
export const updateReviewStart = () => ({
    type: "UPDATE_REVIEW_START",
});

export const updateReviewSuccess = (movie) => ({
    type: "UPDATE_REVIEW_SUCCESS",
    payload: movie,
});

export const updateReviewFailure = () => ({
    type: "UPDATE_REVIEW_FAILURE",
});


//delete
export const deleteReviewStart = () => ({
    type: "DELETE_REVIEW_START",
});

export const deleteReviewSuccess = (id) => ({
    type: "DELETE_REVIEW_SUCCESS",
    payload: id,
});

export const deleteReviewFailure = () => ({
    type: "DELETE_REVIEW_FAILURE",
});
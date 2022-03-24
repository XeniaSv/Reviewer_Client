//get
export const getSeriesStart = () => ({
    type: "GET_SERIES_START",
});
export const getSeriesSuccess = (series) => ({
    type: "GET_SERIES_SUCCESS",
    payload: series,
});
export const getSeriesFailure = () => ({
    type: "GET_SERIES_FAILURE",
});


//create
export const createSeriesStart = () => ({
    type: "CREATE_SERIES_START",
});

export const createSeriesSuccess = (series) => ({
    type: "CREATE_SERIES_SUCCESS",
    payload: series,
});

export const createSeriesFailure = () => ({
    type: "CREATE_SERIES_FAILURE",
});


//update
export const updateSeriesStart = () => ({
    type: "UPDATE_SERIES_START",
});

export const updateSeriesSuccess = (series) => ({
    type: "UPDATE_SERIES_SUCCESS",
    payload: series,
});

export const updateSeriesFailure = () => ({
    type: "UPDATE_SERIES_FAILURE",
});


//delete
export const deleteSeriesStart = () => ({
    type: "DELETE_SERIES_START",
});

export const deleteSeriesSuccess = (id) => ({
    type: "DELETE_SERIES_SUCCESS",
    payload: id,
});

export const deleteSeriesFailure = () => ({
    type: "DELETE_SERIES_FAILURE",
});
import {
    createSeriesFailure,
    createSeriesStart,
    createSeriesSuccess,
    deleteSeriesFailure,
    deleteSeriesStart,
    deleteSeriesSuccess,
    getSeriesFailure,
    getSeriesStart,
    getSeriesSuccess
} from './SeriesActions';
import $api from '../../http/index';

export const getSeries = async (dispatch) => {
    dispatch(getSeriesStart());
    try {
        const res = await $api.get('/series');
        dispatch(getSeriesSuccess(res.data));
        return res;
    } catch (e) {
        dispatch(getSeriesFailure());
    }
};

export const getOneSeries = async (id) => {
    try {
        return await $api.get(`/series/${id}`);
    } catch (e) {
        return e.response;
    }
};

export const getSeriesRating = async (id) => {
    try {
        return await $api.get(`/series/rate/${id}`);
    } catch (e) {
        return e.response;
    }
};

export const getUserSeriesRating = async (id, userId) => {
    try {
        return await $api.get(`/series/rate/${userId}/${id}`)
    } catch (e) {
        return e.response;
    }
}


//create
export const createSeries = async (series, dispatch) => {
    dispatch(createSeriesStart());
    try {
        const res = await $api.post("/series", series);
        dispatch(createSeriesSuccess(res.data));
        return res;
    } catch (err) {
        dispatch(createSeriesFailure());
        return err.response;
    }
};

//update
export const updateSeries = async (series) =>{
    try {
        return await $api.put(`/series/${series.id}`, series);
    } catch (err) {
        return err.response;
    }
};

//delete
export const deleteSeries = async (id, dispatch) => {
    dispatch(deleteSeriesStart());
    try {
        await $api.delete(`/series/${id}`);
        dispatch(deleteSeriesSuccess(id));
    } catch (e) {
        dispatch(deleteSeriesFailure());
    }
};

//put
export const putSeriesRating = async (seriesId, rate, userId) => {
    try {
        return await $api.put(`/series/rate/${seriesId}`, {
            user: userId,
            item: seriesId,
            onItem: 'Series',
            rate: rate
        });
    } catch (e) {
        return e.response;
    }
};
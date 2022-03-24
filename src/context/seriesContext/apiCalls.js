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
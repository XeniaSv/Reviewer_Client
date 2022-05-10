import $api from '../../http/index';
import {
    deleteReviewFailure,
    deleteReviewStart,
    deleteReviewSuccess,
    getReviewsFailure,
    getReviewsStart,
    getReviewsSuccess
} from "./ReviewActions";

export const getIdsByItemId = async (itemId) => {
    try {
        return await $api.get(`/reviews/item/${itemId}/ids`);
    } catch (e) {
        return e.response;
    }
};

export const getIdsByTag = async (tag, type) => {
    try {
        return await $api.get(`/reviews/type/${type}/tag/${tag}/ids`);
    } catch (e) {
        return e.response;
    }
}

export const getLatestIdsByType = async (type) => {
    try {
        return await $api.get(`/reviews/latest/${type}/ids`);
    } catch (e) {
        return e.response;
    }
}

export const getPopularIdsByType = async (type) => {
    try {
        return await $api.get(`/reviews/popular/${type}/ids`);
    } catch (e) {
        return e.response;
    }
}

export const getReviewById = async (reviewId) => {
    try {
        return await $api.get(`/reviews/${reviewId}`);
    } catch (e) {
        return e.response;
    }
};

export const getReviewByAuthorAndType = async (authorId, type, dispatch) => {
    dispatch(getReviewsStart());
    try {
        const res = await $api.get(`/reviews/type/${type}/author/${authorId}`);
        dispatch(getReviewsSuccess(res.data));
    } catch (e) {
        dispatch(getReviewsFailure());
    }
};

export const publishReview = async (review) => {
    try {
        return await $api.post(`/reviews`, review);
    } catch (e) {
        return e.response;
    }
};

export const putLike = async (reviewId) => {
    try {
        return await $api.put(`/reviews/like/${reviewId}`)
    } catch (e) {
        return e.response;
    }
};

export const updateReview = async (review) => {
    try {
        return await $api.put(`/reviews/${review.id}`, review);
    } catch (err) {
        return err.response;
    }
};

//delete
export const deleteReview = async (id, dispatch) => {
    dispatch(deleteReviewStart());
    try {
        await $api.delete(`/reviews/${id}`);
        dispatch(deleteReviewSuccess(id));
    } catch (e) {
        dispatch(deleteReviewFailure());
    }
};
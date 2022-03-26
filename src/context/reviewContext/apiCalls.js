import $api from '../../http/index';

export const getIds = async (itemId) => {
    try {
        return await $api.get(`/reviews/item/${itemId}/ids`);
    } catch (e) {
        return e.response;
    }
};

export const getReviewById = async (reviewId) => {
    try {
        return await $api.get(`/reviews/${reviewId}`);
    } catch (e) {
        return e.response;
    }
};

export const publishReview = async (review) => {
    try {
        return await $api.post(`/reviews`, review);
    } catch (e) {
        return e.response;
    }
}
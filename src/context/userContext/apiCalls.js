import $api from '../../http/index';
import {
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    getUsersFailure,
    getUsersStart,
    getUsersSuccess
} from "./UserActions";

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await $api.get('/users');
        dispatch(getUsersSuccess(res.data));
    } catch (e) {
        dispatch(getUsersFailure());
    }
};

export const deleteUser = async (id, dispatch) =>{
    dispatch(deleteUserStart());
    try {
        await $api.delete(`/users/${id}`);
        dispatch(deleteUserSuccess(id));
    } catch (e) {
        dispatch(deleteUserFailure());
    }
};
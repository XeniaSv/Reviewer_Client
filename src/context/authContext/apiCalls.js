import $api from "../../http";
import {loginFailure, loginStart, loginSuccess, logout} from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await $api.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        return res;
    } catch (e) {
        dispatch(loginFailure);
        return e.response;
    }
}

export const register = async (user) => {
    try {
        return await $api.post("/auth/register", user);
    } catch (e) {
        return e.response;
    }
}

export const logoutFunc = async (dispatch) => {
    try {
        await $api.post("/auth/logout");
        dispatch(logout());
    } catch (e) {
        console.log(e.message);
    }
}
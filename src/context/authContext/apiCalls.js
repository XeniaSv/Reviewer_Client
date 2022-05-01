import $api from "../../http";
import {loginFailure, loginStart, loginSuccess} from "./AuthActions";

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

export const register = async (email, username, password) => {
    try {
        return await $api.post("/auth/register", {
            email: email,
            username: username,
            password: password
        });
    } catch (e) {
        return e.response;
    }
}
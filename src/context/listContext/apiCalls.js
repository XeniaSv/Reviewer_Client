import {
    createListFailure,
    createListStart, createListSuccess,
    deleteListFailure,
    deleteListStart, deleteListSuccess,
    getListsFailure,
    getListsStart,
    getListsSuccess

} from "./ListActions";
import axios from "axios";

const API_URL = `http://localhost:8800/api/`;

export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get('/lists', {
            headers: {
                token: "Authorization " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        });
        dispatch(getListsSuccess(res.data))
    }catch (e) {
        dispatch(getListsFailure());
    }
};

// //create
export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
        const res = await axios.post("/lists", list, {
            headers: {
                token: "Authorization " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListSuccess(res.data));
    } catch (err) {
        dispatch(createListFailure());
    }
};

//delete
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete(`/lists/${id}`, {
            headers: {
                token: "Authorization " + JSON.parse(localStorage.getItem('user')).accessToken,
            },
        });
        dispatch(deleteListSuccess(id));
    }catch (e) {
        dispatch(deleteListFailure());
    }
};
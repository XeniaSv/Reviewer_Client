import ReviewReducer from "./ReviewReducer";
import {createContext, useReducer} from "react";

const INITIAL_STATE = {
    reviews: [],
    isFetching: false,
    error: false,
};

export const ReviewContext = createContext(INITIAL_STATE);

export const ReviewContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(ReviewReducer, INITIAL_STATE);

    return (
        <ReviewContext.Provider
            value={{
                reviews: state.reviews,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}>
            {children}
        </ReviewContext.Provider>
    );
};
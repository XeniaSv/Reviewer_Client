import SeriesReducer from './SeriesReducer';
import {createContext, useReducer} from "react";

const INITIAL_STATE = {
    series: [],
    isFetching: false,
    error: false,
};

export const SeriesContext = createContext(INITIAL_STATE);

export const SeriesContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SeriesReducer, INITIAL_STATE);

    return (
        <SeriesContext.Provider
            value={{
                series: state.series,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}>
            {children}
        </SeriesContext.Provider>
    );
}
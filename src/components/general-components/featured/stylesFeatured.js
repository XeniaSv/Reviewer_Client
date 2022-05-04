import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    nav: {
        marginTop: '80px',
        marginBottom: '80px',
        width: '100%',
    },
    tab: {
        "& .MuiTab-root": {
            fontSize: '25px',
            fontWeight: 'bold',
            color: 'lightgrey',
            "@media (max-width: 820px)": {
                fontSize: '14px',
            },

        },
        "& .MuiTabs-indicator": {
            backgroundColor: "#a9c8d6",
        },
        "& .Mui-selected": {
            color: '#a9c8d6!important',
        },
    }

});
export default useStyles;




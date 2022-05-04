import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    nav: {
        paddingTop: '80px',

    },
    tab: {
        "& .MuiTab-root": {
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'lightgrey',
            "@media (max-width: 820px)": {
                fontSize: '14px',
                padding: 0,
                minWidth: '100px'
            },
            "@media (max-width: 350px)": {
                fontSize: '10px',
                minWidth: '70px'
            }
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




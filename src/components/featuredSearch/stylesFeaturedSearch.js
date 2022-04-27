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
                fontSize: '18px',
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




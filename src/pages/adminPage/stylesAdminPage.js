import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    home: {
        flex: 4
    },
    wrapper: {
        "&.MuiGrid-root": {
            justifyContent: 'space-between',
            maxWidth:'3000px',
            margin:'0 auto',
            "@media (max-width: 820px)": {
                justifyContent: 'center',
            }
        }
    },

    homeWidgets: {
        display: 'flex',
        margin: '20px',
    },
    hide: {
        "@media (max-width: 820px)": {
            display: 'none',
        }
    },
});

export default useStyles;
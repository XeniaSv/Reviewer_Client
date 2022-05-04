import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    searchPage: {
        background: 'linear-gradient(90deg, #69cfbc  0%, #9FACE6 100%)',
        paddingBottom:'5px',
        minHeight:'1360px',
        "@media (min-width: 1480px)": {
            minHeight:'100vh'
        },
    },
    container:{
        background:'white',
        width:'80%',
        margin:'0 auto',
        minHeight:'1360px',
        "@media (min-width: 1480px)": {
            minHeight:'100vh'
        },
    },
});

export default useStyles;
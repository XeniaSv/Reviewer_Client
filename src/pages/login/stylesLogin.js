import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    login: {
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        position: 'relative',
    },
    wrapper: {
        padding: '20px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        color: '#869CD1',
    },
    header: {
        margin: '0 auto'
    },
    container: {
        width: '100%',
        height: ' 100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: ' flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    form: {
        width: '400px',
        height: '400px',
        padding: '50px 100px',
        borderRadius: '5px',
        background: 'linear-gradient(90deg, #69cfbc  0%, #9FACE6 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    input: {
        caretColor: 'white',
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        }, '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            }
        },
    },
    button: {
        "&.MuiButton-root": {
            fontWeight: 'medium',
            backgroundColor: '#869CD1',
            fontSize: '20px',
            color: 'white',
            border: "1px white solid",
            height: '40px',
        },

        "&.MuiButton-root:hover": {
            backgroundColor: '#869CD1',
        },
    }
});
export default useStyles;

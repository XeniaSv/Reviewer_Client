import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    wrapper: {
        padding: '20px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        color: '#869CD1',
    },
    container: {
        width: '100%',
        height: '60%',
        display: ' flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    header: {
        margin: '0 auto'
    },
    form: {
        marginTop: '100px',
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
    buttonLogIn: {
        "&.MuiButton-root": {
            fontWeight: 'medium',
            backgroundColor: '#869CD1',
            fontSize: '16px',
            color: 'white',
            border: "1px white solid",
            height: '50px',
            width: '100px',
        },

        "&.MuiButton-root:hover": {
            backgroundColor: '#869CD1',
        },
    },
    button: {
        "&.MuiButton-root": {
            margin: '0 auto',
            fontWeight: 'medium',
            backgroundColor: '#869CD1',
            fontSize: '20px',
            color: 'white',
            border: "1px white solid",
            height: '40px',
            width: '300px'
        },

        "&.MuiButton-root:hover": {
            backgroundColor: '#869CD1',
        },
    }
});
export default useStyles;
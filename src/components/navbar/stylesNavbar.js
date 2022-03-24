import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    back: {
        background: 'linear-gradient(90deg, #69cfbc  0%, #9FACE6 100%)'
    },
    container: {
        direction: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },

    searchIcon: {
        margin: '10px 0',
        color: 'white'
    },
    search: {
        caretColor: 'white',
        width: '70%',
        marginTop: '10px',
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

});

export default useStyles;

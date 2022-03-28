import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 720,
        height: 600,
        backgroundColor: 'white',
        boxShadow: 24,
        "@media (max-width: 754px)": {
            width:500
        },
        "@media (max-width: 534px)": {
            width:400
        },
        "@media (max-width: 400px)": {
            width:350
        },

    },
    buttonOpen: {
        "&.MuiButton-root": {
            position: 'fixed',
            bottom: 30,
            right: 16,
            color: 'white',
            borderColor: 'white',
            "&:hover": {
                borderColor: 'white',
            }
        }
    },
    container: {
        maxWidth: 700,
        height: 600,
        padding: '10px',
        direction:"column",
        justifyContent:"space-around",
        alignItems:"center",

        "&.MuiGrid-root": {
            margin: '0 auto',
            "@media (max-width: 754px)": {
                minWidth:500
            },
            "@media (max-width: 534px)": {
                minWidth:400
            },
            "@media (max-width: 400px)": {
                minWidth:350
            },

        }
    },
    title: {
        caretColor: '#406170',
        marginLeft:'-10%',
        "& .MuiOutlinedInput-root": {
            color: '#406170',
            width: '650px',
            "@media (max-width: 754px)": {
                width:470
            },
            "@media (max-width: 534px)": {
                width:370
            },
            "@media (max-width: 400px)": {
                width:300
            },
            '& fieldset': {
                borderColor: '#406170',
            },
            '&:hover fieldset': {
                borderColor: '#406170',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#406170',
            }
        },
        '& label': {
            color: '#406170',
        },
        '& label.Mui-focused': {
            color: '#406170',
        }, '& .MuiInput-underline:after': {
            borderBottomColor: '#406170',
        },
    },
    tags: {
        caretColor: '#406170',
        "& .MuiOutlinedInput-root": {
            color: '#406170',
            width: '650px',
            '& fieldset': {
                borderColor: '#406170',
            },
            '&:hover fieldset': {
                borderColor: '#406170',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#406170',
            }
        },
        '& label': {
            color: '#406170',
        },
        '& label.Mui-focused': {
            color: '#406170',
        }, '& .MuiInput-underline:after': {
            borderBottomColor: '#406170',
        },

    },
    text: {
        caretColor: '#406170',
        "& .MuiOutlinedInput-root": {
            color: '#406170',
            width: '650px',
            "@media (max-width: 754px)": {
                width:470
            },
            "@media (max-width: 534px)": {
                width:370
            },
            "@media (max-width: 400px)": {
                width:300
            },

            '& fieldset': {
                borderColor: '#406170',
            },
            '&:hover fieldset': {
                borderColor: '#406170',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#406170',
            }
        },
        '& label': {
            color: '#406170',
        },
        '& label.Mui-focused': {
            color: '#406170',
        }, '& .MuiInput-underline:after': {
            borderBottomColor: '#406170',
        },
    },
    ratingStar: {
        "&.MuiRating-root": {
            color: 'white',
            fontSize: '40px',
            margin: '0 225px',
        }
    },
    rating: {

        "&.MuiGrid-root": {
            background: 'linear-gradient(90deg, #69cfbc  0%, #9FACE6 100%)',
            width: 650,
        }
    },
    button: {
        "&.MuiButton-root": {
            width: '200px',
            backgroundColor: 'rgba(144, 156, 209)',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            }
        }
    },

});

export default useStyles;
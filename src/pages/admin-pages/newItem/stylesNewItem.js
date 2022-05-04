import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    hide: {
        "@media (max-width: 820px)": {
            display: 'none',
        }
    },
    wrapper: {
        "&.MuiGrid-root": {
            maxWidth:'3000px',
            margin:'0 auto',
            "@media (max-width: 820px)": {
                justifyContent: 'center',
            }
        }
    },
    wrapperInput: {
        "&.MuiGrid-root": {
            "@media (min-width: 820px)": {
                flexDirection: 'row',
            }
        }
    },
    wrapperProduct: {
        "&.MuiGrid-root": {
            "@media (min-width: 820px)": {
                width: '50%',
            }
        }

    },
    newProduct: {
        flex: 5,
        height: '100%'
    },


    addProductItem: {
        marginBottom: '10px',
        padding: '5px',

        '& label.Mui-focused': {
            color: 'rgba(144, 156, 209)',
        },
        '& .MuiOutlinedInput-root': {
            width: '350px',
            '&:hover fieldset': {
                borderColor: 'rgba(144, 156, 209)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(144, 156, 209)',
            }
        },

    },

    addButton: {
        width: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    addProductButton: {
        "&.MuiButton-root": {
            margin: '10px auto',
            color: 'white',
            width: '250px',
            border: '1px solid rgba(130, 141, 191)',
            backgroundColor: 'rgba(144, 156, 209)',
            marginLeft: '10px',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            }
        }
    },

    imageName: {
        fontStyle: 'italic',
        fontSize: '12px'
    },
    imageIcon: {
        "&.MuiIconButton-root": {
            color: 'rgba(144, 156, 209)!important',
        }
    },


});

export default useStyles;
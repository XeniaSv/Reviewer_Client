import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    hide: {
        "@media (max-width: 820px)": {
            display: 'none',
        }
    },
    wrapper: {
        "&.MuiGrid-root": {
            "@media (max-width: 820px)": {
                justifyContent: 'center',
            },
            "@media (min-width: 820px)": {
                marginTop:'70px',
            }
        }
    },
    newProduct: {
        flex: 5,
        height: '100%'
    },

    tags: {
        width: '400px',
        "@media (max-width: 820px)": {
            width: '300px',
        },
        "@media (max-width: 447px)": {
            width: '250px',
        },
        "@media (max-width: 340px)": {
            width: '200px',
        },
        '& label:focused': {
            color: 'rgba(144, 156, 209)',
        },

        '& .MuiInput-root:after': {
            borderBottom: '2px solid rgba(144, 156, 209)!important',
        },

    },
    menu: {
        marginTop:'70px',
        marginLeft:'10px',
        marginBottom: '10px',
        "&.MuiSvgIcon-root": {
            color: 'grey',
        },
        "@media (min-width: 820px)": {
            display: 'none',
            zIndex: 999
        }
    },
    menuList: {
        "&.MuiList-root": {
            margin: '10px',
        }
    },
    menuButton: {
        "&.MuiButton-root": {
            backgroundColor: 'rgba(144, 156, 209)',
            color: 'white',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            },


        }
    },
    menuItem: {
        "&.MuiMenuItem-root": {
            "@media (max-width: 600px)": {
                minHeight: '40px!important'
            },
        }
    },
    updateProductItem: {
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
            },
            "@media (max-width: 820px)": {
                width: '300px',
            },
            "@media (max-width: 447px)": {
                width: '250px',
            },
            "@media (max-width: 340px)": {
                width: '200px',
            },
        },

    },

    updateButton: {
        width: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    updateProductButton: {
        "&.MuiButton-root": {
            margin: '10px auto',
            color: 'white',
            width: '250px',
            border: '1px solid rgba(130, 141, 191)',
            backgroundColor: 'rgba(144, 156, 209)',
            marginLeft: '10px',
            "@media (max-width: 340px)": {
                width: '200px',
            },
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


})

export default useStyles;
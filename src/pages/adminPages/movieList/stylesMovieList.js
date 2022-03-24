import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    wrapper: {
        "&.MuiGrid-root": {
            justifyContent: 'space-between',
            "@media (max-width: 820px)": {
                justifyContent: 'center',
            }
        }
    },
    hide: {
        "@media (max-width: 820px)": {
            display: 'none',
        }
    },
    productList: {
        flex: 4,
        height: 'calc(100vh - 50px)',
    },

    productListItem: {
        display: 'flex',
        alignItems: 'center',
    },

    button: {
        "&.MuiButton-root": {
            margin: '10px auto',
            color: 'white',
            width: '200px',
            border: '1px solid rgba(130, 141, 191)',
            backgroundColor: 'rgba(144, 156, 209)',
            marginLeft: '10px',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            }
        }
    },
    productListImg: {
        width: '32px',
        height: '32px',
        borderRadius: ' 50%',
        objectFit: 'cover',
        marginRight: '10px',
    },

    productListEdit: {
        border: 'none',
        borderRadius: '10px',
        padding: ' 5px 10px',
        backgroundColor: '#3bb077',
        color: 'white',
        cursor: 'pointer',
        marginRight: '20px',
    },

    productListDelete: {
        color: 'red',
        cursor: 'pointer',
    },

    table: {
        color: '#406170!important',
        backgroundColor: 'rgba(235, 242, 245, 0.3)'
    }
});

export default useStyles;
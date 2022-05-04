import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    table: {
        color: '#406170!important',
        backgroundColor: 'rgba(235, 242, 245, 0.3)'
    },
    edit: {
        border: 'none',
        borderRadius: '10px',
        padding: '5px 10px',
        backgroundColor: 'rgba(144, 156, 209)',
        color: 'white',
        cursor: 'pointer',
        marginRight: '20px'
    },

    delete: {
        color: 'black',
        cursor: 'pointer'
    },
    wrapper: {
        "&.MuiGrid-root": {
            maxWidth:'3000px',
            margin:'0 auto',
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


});

export default useStyles;
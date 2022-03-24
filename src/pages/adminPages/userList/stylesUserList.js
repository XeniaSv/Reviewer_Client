import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    wrapper: {
        "&.MuiGrid-root": {
            "@media (max-width: 820px)": {
                justifyContent: 'center',
            }
        }
    },
    userList: {
        flex: 4,
        height: 'calc(100vh - 50px)'
    },
    table: {
        color: '#406170!important',
        backgroundColor: 'rgba(235, 242, 245, 0.3)'
    },

    userListUser: {
        display: 'flex',
        alignItems: 'center',
    },

    userListImg: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px'
    },

    userListEdit: {
        border: 'none',
        borderRadius: '10px',
        padding: '5px 10px',
        backgroundColor: 'rgba(144, 156, 209)',
        color: 'white',
        cursor: 'pointer',
        marginRight: '20px'
    },

    userListDelete: {
        color: 'black',
        cursor: 'pointer'
    },
    hide: {
        "@media (max-width: 820px)": {
            display: 'none',
        }
    }
});

export default useStyles;
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    sidebar: {
        flex: ' 1',
        height: 'calc(100vh - 50px)',
        backgroundColor: 'rgba(235, 242, 245, 0.3)',
        position: 'sticky',
        top: '50px',
        "@media (max-width: 820px)": {
            display: 'none',
        }

    },

    sidebarWrapper: {
        padding: '20px',
        "@media (max-width: 920px)": {
            padding: "5px",
        }
    },

    sidebarMenu: {
        marginBottom: ' 10px',
        color: '#555',
    },

    sidebarTitle: {
        fontSize: '13px',
        color: 'rgb(187, 186, 186)',
    },

    sidebarList: {
        listStyle: ' none',
        padding: '5px',
    },
    sidebarListItem: {
        color: 'rgba(0, 0, 0, 0.7)!important',
        padding: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        borderRadius: ' 10px',
        '&:hover': {
            backgroundColor: 'rgb(240, 240, 255)',
        },
        "@media (max-width: 930px)": {
            padding: "5px 0",
        }
    },

    sidebarIcon: {
        marginRight: '5px',
        fontSize: '20px !important',
    },

});

export default useStyles;
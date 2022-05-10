import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    profile: {
        height: 'calc(100vh - 50px)'
    },
    avatar: {
        "&.MuiAvatar-root": {
            width: 200,
            height: 200,
            borderRadius: 0,
            float: 'left',
            marginRight: '10px',
            zIndex: 0,

            "@media (max-width: 500px)": {
                float: 'none',
                margin: '0 auto'
            }

        }
    },
    container: {
        display: 'flex',
        '& .MuiTextField-root': {
            margin: '20px',
            width: '250px'
        },
        "@media (max-width: 820px)": {
            flexDirection: 'column',
            '& .MuiTextField-root': {
                margin: '20px 0',
                width: '90%'
            },
        }
    },
    menu: {
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
    menuItemContainer: {
        "@media (max-width: 820px)": {
            transform: 'translate3d(300px, 124.667px, 0px)!important',
        },
        "@media (max-width: 673px)": {
            transform: 'translate3d(270px, 124.667px, 0px)!important',
        },
        "@media (max-width: 600px)": {
            transform: 'translate3d(100px, 124.667px, 0px)!important',
        },
    }
});

export default useStyles;
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    topbar: {
        width: '100%',
        height: '50px',
        position: 'sticky',
        top: '0',
        zIndex: '999',
        background: 'linear-gradient(90deg, #69cfbc  0%, #9FACE6 100%)',


    },

    topbarWrapper: {
        height: '100%',
        padding: '0px 20px',
        display: ' flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth:'3000px',
        margin:'0 auto'
    },

    logo: {
        fontWeight: 'bold',
        fontSize: '30px',
        color: 'white',
        "@media (max-width: 820px)": {
            fontSize: '20px',
        }
    },
    menu: {
        "&.MuiSvgIcon-root": {
            color: 'white'
        },
        "@media (min-width: 820px)": {
            display: 'none',
        }
    },
    menuList: {
        ".MuiList-root": {
        }
    }

});

export default useStyles;
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

        }
    },
    container: {
        display: 'flex',
        '& .MuiTextField-root': {
            margin: '20px',
            width: '250px'
        },
    }
});

export default useStyles;
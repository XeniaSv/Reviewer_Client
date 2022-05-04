import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        height: 510,
        backgroundColor: 'white',
        boxShadow: 24,
        "@media (max-width: 754px)": {
            width:600
        },
        "@media (max-width: 534px)": {
            width:500
        },
        "@media (max-width: 630px)": {
            width:400
        },
        "@media (max-width: 415px)": {
            width:350
        },

    },
    avatar: {
        '&.MuiAvatar-root': {
            width: 100,
            height: 100,
            borderRadius: 50,
            float: 'left',
            margin: '20px',
            marginLeft: '10%',
        }
    },
    info: {
        "&.MuiTypography-root": {
            textAlign: 'center',
            width: '300px',
            marginLeft: '35%',
            color: '#406170',
            "@media (max-width: 754px)": {
                width:'200px',
            },
        }
    },
    buttonOpen: {
        "&.MuiButton-root": {
            backgroundColor: 'rgba(144, 156, 209)',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            }
        }
    },
    button: {
        "&.MuiButton-root": {
            backgroundColor: 'rgba(144, 156, 209)',
            marginTop: '10px',
            marginLeft: '25%',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            },
            "@media (max-width: 740px)": {
                marginLeft: '18%',
            },
        }
    },
    reviewRating: {
        fontSize: '12px',
        marginRight: '2px',
        alignSelf: 'flex-end'
    },
    reviewIcon: {
        color: 'white',
    },
    title: {
        "&.MuiTypography-root": {
            textAlign: 'center',
            color: 'white',
            padding: '5px',
            fontSize:'20px',
            background: 'linear-gradient(90deg, #69cfbc  0%, #9FACE6 100%)',
            //backgroundColor: 'rgba(125, 136, 186, 0.3)',
            boxShadow: '0px 4px 30px 4px rgba(125, 136, 186, 0.6)',
        }
    },
    text: {
        "&.MuiTypography-root": {
            width: '92%',
            textAlign: 'center',
            color: '#406170',
            margin: '0 auto',
            marginTop: '10px',
            height: '280px',
            overflow: 'scroll',
            overflowX: 'hidden',
            paddingRight: '15px',
            lineHeight: 2,
        }
    },
    tag: {
        backgroundColor: 'rgba(144, 156, 209)',
        fontSize: '12px',
        marginTop: '-10px',
        marginRight: '5px',
        borderRadius: '10%',
        padding: '3px',
        color: 'white',
        "@media (max-width: 600px)": {
            marginTop: '10px',
        },
    }
});

export default useStyles;
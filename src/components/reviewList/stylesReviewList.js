import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    list: {
        width: '100%',
        border: '1px white solid',
        height: '370px',
        marginTop: '70px',
    },
    listTitle: {
        color: 'white',
        fontSize: '28px',
        fontWeight: 'bolder',
        marginLeft: '50px',
        marginTop: '20px'
        //textShadow: '0px 0 4px #5E8D9F',
    },
    listEmpty: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
        fontSize: '28px',
        fontWeight: "lighter",
    },
    wrapper: {
        position: 'relative'
    },
    sliderArrowLeft: {
        transform: 'scale(1.7)',
        color: 'white',
        borderRadius: '15%',
        backgroundColor: 'rgba(204, 228, 230, 0.7)',
        position: 'absolute',
        zIndex: '99',
        top: 0,
        bottom: 0,
        margin: 'auto',
        cursor: 'pointer',
        left: 0,
    },
    sliderArrowRight: {
        transform: 'scale(1.7)',
        color: 'white',
        borderRadius: '15%',
        backgroundColor: 'rgba(204, 228, 230, 0.7)',
        position: 'absolute',
        zIndex: '99',
        top: 0,
        bottom: 0,
        margin: 'auto',
        cursor: 'pointer',
        right: 0,
    },
    container: {
        marginLeft: '50px',
        display: 'flex',
        width: 'max-content',
        marginTop: '10px',
        transform: 'translateX(0px)',
        transition: 'all 1s ease'
    }

});
export default useStyles;
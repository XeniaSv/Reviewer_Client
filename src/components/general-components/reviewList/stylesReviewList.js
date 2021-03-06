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
        marginTop: '20px',
        "@media (max-width: 545px)": {
            marginLeft: '20px',
        },
    },
    listEmpty: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
        fontSize: '28px',
        fontWeight: "lighter",
    },

    sliderArrowLeft: {
        transform: 'scale(1.7)',
        color: 'white',
        borderRadius: '15%',
        backgroundColor: 'rgba(204, 228, 230, 0.7)',
        // position: 'absolute',
        zIndex: '99',
        marginTop: '50px',
        margin: 'auto',
        cursor: 'pointer'
    },
    sliderArrowRight: {
        transform: 'scale(1.7)',
        color: 'white',
        borderRadius: '15%',
        backgroundColor: 'rgba(204, 228, 230, 0.7)',
        // position: 'absolute',
        zIndex: '99',
        marginTop: '50px',
        margin: 'auto',
        cursor: 'pointer'
    },
    container: {
        position: 'relative',
        paddingLeft: '50px',
        "@media (max-width: 545px)": {
            paddingLeft: '20px',
        },
        // marginLeft: '50px',

        // height:'200px',
        marginTop: '10px',
    }

});
export default useStyles;
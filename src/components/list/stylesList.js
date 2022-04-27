import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    listTitle: {
        color: '#7DA9BC',
        fontSize: '25px',
        fontWeight: 'bolder',
        marginBottom: '20px'
    },
    listEmpty: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: '#7DA9BC',
        fontSize: '28px',
        fontWeight: "lighter",
    },

    sliderArrowLeft: {
        transform: 'scale(1.7)',
        color: 'white',
        borderRadius: '15%',
        backgroundColor: 'rgba(204, 228, 230, 0.7)',
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
        marginBottom: '70px',
        backgroundColor: '#C2E1F0',
        height: '300px',
        boxShadow: '0px 0px 10px 10px #C2E1F0',
        marginTop: '5px',
        "@media (max-width: 820px)": {
            height: '250px',
        }


    },
    carusel: {
        height: '230px',
    },

});
export default useStyles;
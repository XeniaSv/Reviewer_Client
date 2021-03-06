import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    list: {
        width: '100%',
        marginTop: '50px',
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
        color: '#a9c8d6',
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
        position:'relative',
        paddingLeft: '50px',
        // marginLeft: '50px',

        // height:'200px',
        marginTop: '10px',
    }

});
export default useStyles;
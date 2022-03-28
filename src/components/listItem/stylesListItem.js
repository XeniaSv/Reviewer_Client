import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    listItem: {
        height: '200px',
        width: '300px',
        marginRight: '10px',
        backgroundColor: 'white',
        overflow:'hidden',
        cursor: 'pointer',
        color: 'black',

        "&:hover": {
            width: '325px',
            height: '220px',
            position: 'absolute',
            WebkitBoxShadow: '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
            boxShadow: '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
            borderRadius: '5px',
        },

        "@media (max-width: 820px)": {
            height: '150px',
            width: '200px',
            "&:hover": {
                height: '170px',
                width: '200px',
            }

        }

    },
    itemInfo: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 5px',
    },
    icons: {
        height: '60px',
        display: 'flex',
        marginLeft: '-9px',
        marginRight: '-9px',
        marginBottom: '15px',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: 'linear-gradient(90deg, #69cfbc  0%, #9FACE6 100%)',
    },

    icon: {
        border: '2px solid white',
        padding: '5px',
        borderRadius: '50%',
        marginRight: '10px',
        fontSize: '16px',
        color: 'white'
    },
    rating: {
        color: 'white',
        fontSize: '18px',
    },

    itemInfoTop: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        justifyContent: 'center',
        fontweight: '600',
        color: '#5a697c',
    },
    itemName: {
        fontSize: '20px',
        margin: '0 auto',
        height: '30px',
        fontStyle: 'italic',
        overflow: 'hidden',
        display: '-webkit-box',
        lineClamp: '2',
        boxOrient: 'vertical',
        textAlign:'center'
    },
    itemQuote: {
        fontSize: '16px',
        margin: '0 auto',
        marginTop: '5px',
        width: '90%',
        height: '40px',
        fontStyle: 'italic',
        overflow: 'hidden',
        display: '-webkit-box',
        lineClamp: '2',
        boxOrient: 'vertical',

    },
    itemAuthor: {
        fontSize: '16px',
        textAlign: 'right',
        marginRight: '15px',
        marginTop: '5px',

    },
    img: {
        width: '100%',
        height:'100%',
    },

    buttonContainer: {
        width: '300px',
        height:'30px',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent: 'space-around'
    },
    button: {
        "&.MuiButton-root": {
            backgroundColor: 'rgba(144, 156, 209)',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            }
        }
    },
});

export default useStyles;


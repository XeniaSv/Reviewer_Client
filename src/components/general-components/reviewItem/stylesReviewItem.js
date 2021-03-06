import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    listItem: {
        width: '225px',
        height: '200px',
        backgroundColor: 'white',
        marginRight: '5px',
        overflow: 'hidden',
        cursor: 'pointer',

        "&:hover": {
            width: '325px',
            height: '300px',
            top: '-150px',
            position: 'absolute',
            WebkitBoxShadow: '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
            boxShadow: '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
            borderRadius: '5px',
        },

    },
    itemInfo: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',

    },
    icons: {
        height: '46px',
        display: 'flex',
        marginTop: '-9px',
        marginLeft: '-9px',
        marginRight: '-9px',
        marginBottom: '10px',
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
    },
    itemName: {
        fontSize: '18px',
        margin: '0 auto',
    },
    itemQuote: {
        fontSize: '14px',
        margin: '0 auto',
        marginTop: '3px',
        width: '90%',
        height: '40px',
        fontStyle: 'italic',
        overflow: 'hidden',
        display: '-webkit-box',
        lineClamp: '2',
        boxOrient: 'vertical',

    },
    itemAuthor: {
        fontSize: '14px',
        textAlign: 'right',
        marginRight: '15px',
        marginTop: '5px',

    },
    img: {
        width: '100%',
        height: '140px',
        objectFit: 'cover',
    },
    load:{
        "&.MuiCircularProgress-root":{
            color: 'rgba(144, 156, 209)'
        }
    },
    button: {

        "&.MuiButton-root": {
            backgroundColor: 'rgba(144, 156, 209)',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            }
        }
    },
    buttonWrapper: {
        "&.MuiCardActions-root": {
            justifyContent: 'space-between'
        }
    },
    ratingBox: {
        marginLeft:'-30px',
        width:'40px',
        height:'30px',
        padding:'2px',
        border:'1px solid rgba(144, 156, 209)',
        borderRadius:'3px',
        display: 'inline',
    },
    reviewIcon: {
        color: 'white',
    },
    reviewStar: {
        marginBottom:'-5px',
        color: 'rgba(144, 156, 209)',
    },
    reviewRating: {
        fontSize: '14px',
        fontWeight:'500',
        paddingLeft:'5px',
        color:'rgba(144, 156, 209)'
    },
    reviewLikes: {
        fontSize: '12px',
        marginRight: '2px',
        alignSelf: 'flex-end',
    },
    textReview:{
        fontSize: '16px',
        margin: '0 auto',
        marginTop: '5px',
        width: '90%',
        height: '60px',
        fontStyle: 'italic',
        overflow: 'hidden',
        display: '-webkit-box',
        lineClamp: '3',
        boxOrient: 'vertical',
    }
});

export default useStyles;

import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({

    image:{
        width: '250px',
        height:'180px',
        float:'left',
        boxShadow:' 0px 0px 20px  rgba(34, 60, 80, 0.9)',
        "@media (max-width: 390px)": {
            width: '200px',
            height:'130px',
        }
    },
    info:{
        marginLeft:'40px',
        width:'60%',
        "@media (max-width: 820px)": {
            marginLeft:0,
            width:'90%',
        }
    },
    load:{
        "&.MuiCircularProgress-root":{
            color: 'rgba(144, 156, 209)'
        }
    },

    buttonLikes: {
        "&.MuiButton-root": {
            backgroundColor: 'rgba(144, 156, 209)',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            }
        }
    },
    buttonRating: {
            marginLeft:'10px',
            width:'40px',
            height:'30px',
            padding:'2px',
            border:'1px solid rgba(144, 156, 209)',
            borderRadius:'3px',
            display: 'inline',
    },
    button:{
        "&.MuiButton-root": {
            backgroundColor: 'rgba(144, 156, 209)',
            marginLeft:'20px',
            "&:hover": {
                backgroundColor: 'rgba(130, 141, 191)',
            },
            "@media (max-width: 420px)": {
                marginLeft:'10px',
            },
            "@media (max-width: 400px)": {
                marginLeft:'5px',
            },

            "@media (max-width: 393px)": {
                marginLeft:'2px',
            },
            "@media (max-width: 390px)": {
                marginTop:'10px',
            }
        }
    },
    author:{
        '&.MuiTypography-root':{
            marginTop:'5px'
        }

    },
    // buttonWrapper: {
    //     "&.MuiCardActions-root": {
    //         justifyContent: 'space-between'
    //     }
    // },
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
        "&.MuiTypography-root ":{
            margin: '10px 0',
        },

        height: '60px',
        fontStyle: 'italic',
        overflow: 'hidden',
        display: '-webkit-box',
        lineClamp: '3',
        boxOrient: 'vertical',
    },
    line:{
        marginTop:'20px',
        border: 0,
        borderTop:' 2px solid lightgrey',
        width:'90%'
    }
});

export default useStyles;

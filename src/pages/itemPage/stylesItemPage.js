import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    itemPage:{
        marginTop:'69px',
        paddingTop: '70px',
        background:'linear-gradient(90deg, #69cfbc 0%, #9FACE6 100%)',
    },
    container:{
        justifyContent:'center',
        "&.MuiGrid-root":{
            "@media (min-width: 820px)": {
                flexDirection: 'row',
            }
        }
    },
    item:{
        display: 'flex',
        justifyContent:'center',
        maxWidth:'500px'

    },
    image: {
        maxHeight:'100%',
        maxWidth: '100%',
        boxShadow:' 0px 17px 33px -1px rgba(34, 60, 80, 0.9)',
    },
    ratingInfo:{
        justifyItems:'center',
        marginBottom:'15px',
        height:'60px',
        maxWidth:'100px',
        backgroundColor:'rgba(144, 156, 209)',
        borderRadius:'10%',
        boxShadow: '0px 4px 30px 8px rgba(125, 136, 186, 0.8)',
    },
    ratingStar:{
        "&.MuiRating-root":{
            color: 'white',
            fontSize: '40px'
        }
    },

    icon: {
        border: '2px solid white',
        marginTop:'5px',
        marginRight:'5px',
        padding: '5px',
        borderRadius: '50%',
        color:'white'
    },
    rating:{
        color: 'white',
        fontSize:'20px',
        marginLeft:'5px',
    },
    info:{
        color: 'white',
    },
    infoItem: {
        padding:'15px',
        backgroundColor:'rgba(125, 136, 186, 0.2)',
        borderRadius: '1%',

        "&.MuiGrid-root":{
            maxWidth:'500px',
        }
    },
    infoTitle:{
        textDecoration:'underline'
    },


});

export default useStyles;


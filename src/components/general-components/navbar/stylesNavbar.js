import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({

    toolbar:{
        "&.MuiToolbar-root":{
            "@media (max-width: 400px)": {
                padding:"0 5px"
            },
        }
    },
    back: {
        background: 'linear-gradient(90deg, #69cfbc  0%, #9FACE6 100%)',
        paddingRight:'0!important',



    },
    container: {
        direction: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        margin:'0 auto',
        maxWidth:'3000px',

    },

    searchIcon: {
        margin: '10px 5px',
        color: 'white',
        "@media (max-width: 300px)": {
            marginLeft:'-6px!important'
        },
    },

    search: {
        display:'inline',
        caretColor: 'white',
        width: '70%',
        marginTop: '10px',
        "@media (max-width: 820px)": {
            marginLeft:'12px!important'
        },
        "@media (max-width: 300px)": {
            marginLeft:'0px!important'
        },
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        }, '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },

    },
    menuItem:{
        '&.MuiMenuItem-root':{
            justifyContent: 'center'
        }
    },
    radio:{
        "&.MuiFormControlLabel-root":{
            marginLeft:0,
        },

    },
    radioButton:{
        "&.Mui-checked":{
            color:'rgba(144, 156, 209)!important'
        }
    },
    homepageBtn:{
        "&.MuiButton-root": {
            "@media (max-width: 689px)": {
                display: 'none',
            },
        },

    },
    arrowDownSearch: {
        color: "white"
    },
    clearSearch:{
        color: "white"
    },
    optionSearch:{
        "&.MuiButton-root": {
            "@media (max-width: 689px)": {
               padding:0,
                fontSize:'12px'
            },
            "@media (max-width: 350px)": {
                padding:0,
                fontSize:'9px',
                width:'80px'
            },
        },

    },
    optionIcon:{
        "@media (max-width: 689px)": {
            "&.MuiSvgIcon-root":{
                marginRight: "4px",
                marginLeft: '-8px'
            }
        },
        "@media (max-width: 300px)": {
            "&.MuiSvgIcon-root":{
                marginRight: "0px",
                marginLeft: '-8px'
            }
        },
    },
    avatar:{
        "&.MuiIconButton-root":{
            "@media (max-width: 689px)": {
                padding:"0",
            },
        }
    },
    avatarIcon:{
        "&.MuiAvatar-root": {
            "@media (max-width: 300px)": {
                width: '30px',
                height:'30px'
            },
        },
    }



});

export default useStyles;

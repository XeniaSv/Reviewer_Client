import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    itemPage: {
        marginTop: '68px',
        paddingTop: '70px',
        "@media (max-width: 350px)": {
            marginTop: '120px'
        },
        "@media (max-width: 740px)": {
            marginTop: '0',
            paddingTop: '90px',
        },
        background: 'linear-gradient(90deg, #69cfbc 0%, #9FACE6 100%)',
    },
    mainContainer: {
        justifyContent: 'space-around',
        "&.MuiGrid-root": {
            "@media (min-width: 820px)": {
                flexDirection: 'row',
            },

            "@media (max-width: 520px)": {
                padding: '0 20px'
            },

        }
    },
    item: {
        maxWidth: '500px',
        maxHeight: '600px',
        "@media (max-width: 1315px)": {
            flexDirection: 'row',
            maxWidth: '400px',
            maxHeight: '500px',
        },

    },
    image: {
        height: '100%',
        width: '100%',
        marginTop: '100px',
        boxShadow: ' 0px 17px 33px -1px rgba(34, 60, 80, 0.9)',
        "@media (max-width: 1200px)": {
            marginTop: '0',
        },

    },
    ratingInfo: {
        justifyItems: 'center',
        marginBottom: '15px',
        height: '60px',
        maxWidth: '100px',
        backgroundColor: 'rgba(144, 156, 209)',
        borderRadius: '10%',
        boxShadow: '0px 4px 30px 8px rgba(125, 136, 186, 0.8)',

    },
    ratingStar: {
        "&.MuiRating-root": {
            color: 'white',
            fontSize: '40px'
        }
    },

    icon: {
        border: '2px solid white',
        marginTop: '5px',
        marginRight: '5px',
        padding: '5px',
        borderRadius: '50%',
        color: 'white'
    },
    rating: {
        color: 'white',
        fontSize: '20px',
        marginLeft: '5px',
    },
    ratingContainer: {
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        "@media (max-width: 1200px)": {
            direction: "column",
            margin: '20px 0',
            justifyContent: "center",
        },
        "@media (min-width: 1200px)": {
            margin: '20px 30%',

        },
    },
    infoContainer: {
        color: 'white',
        direction: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: 'flex',
        maxHeight: '100%',
        maxWidth: '800px',
        minWidth: '200px',
        "@media (max-width: 1200px)": {
            "&.MuiGrid-root": {
                justifyContent: 'center'
            }
        },
    },

    infoItemContainer: {
        direction: 'row',
        justifyContent: 'space-around',
        padding: '15px',
        backgroundColor: 'rgba(125, 136, 186, 0.2)',
        borderRadius: '1%',

        "&.MuiGrid-root": {
            maxWidth: '1000px',
            minWidth: '800px',
        },
        "@media (max-width: 1200px)": {
            "&.MuiGrid-root": {
                direction: 'column',
                minWidth: '500px',
                justifyContent: 'center'
            }
        },
        "@media (max-width: 545px)": {
            "&.MuiGrid-root": {
                minWidth: '350px'
            }
        },
        "@media (max-width: 350px)": {
            "&.MuiGrid-root": {
                minWidth: '300px'
            }
        },
    },
    infoItem: {
        "&.MuiGrid-root": {
            maxWidth: '500px',
        },
        "@media (max-width: 1200px)": {
            "&.MuiGrid-root": {
                minWidth: '500px',
                textAlign: 'center'
            }
        },
        "@media (max-width: 545px)": {
            "&.MuiGrid-root": {
                minWidth: '350px'
            }
        },
        "@media (max-width: 350px)": {
            "&.MuiGrid-root": {
                minWidth: '300px'
            }
        },
    },
    infoTitle: {
        textDecoration: 'underline',
    },


});

export default useStyles;


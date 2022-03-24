import * as React from 'react';
import useStyles from "./stylesReviewItem";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ThumbUpAltOutlined} from "@mui/icons-material";
import ReviewModal from "../reviewModal/ReviewModal";


function ReviewItem({index, item}) {

    // const [isHovered, setIsHovered] = useState(false);
    // const [movie, setMovie] = useState({});
    //
    const classes = useStyles();

    //
    // useEffect(() => {
    //     const getMovie = async () => {
    //         try {
    //             const res = await axios.get('/movies/find/' + item, {
    //                 headers: {
    //                     Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
    //                 },
    //             });
    //             setMovie(res.data);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     };
    //     getMovie();
    // }, [item]);

    return (
        // <div className={classes.listItem}
        //      style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        //      onMouseEnter={() => setIsHovered(true)}
        //      onMouseLeave={() => setIsHovered(false)}>
        //     <img className={classes.img} src={movie.imgSm} alt=""/>
        <>
            <Card sx={{maxWidth: 300, marginRight: '10px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color='#5a697c'>
                        Автор
                    </Typography>
                    <Typography variant="body2" color="#5a697c">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions className={classes.buttonWrapper}>
                    <Button className={classes.button} variant="contained" size="small">
                        <span className={classes.reviewRating}>124</span>
                        <ThumbUpAltOutlined className={classes.reviewIcon}/>
                    </Button>
                    <ReviewModal/>
                </CardActions>
            </Card>
        </>
    );
}

export default ReviewItem;

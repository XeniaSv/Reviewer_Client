import './stylesList'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import ListItem from '../listItem/ListItem'
import {useEffect, useState} from "react";
import useStyles from "../list/stylesList";
import {Carousel} from '@trendyol-js/react-carousel';
import {getLatestIdsByType, getPopularIdsByType} from "../../context/reviewContext/apiCalls";
import {Box} from "@mui/material";

const categories = ['Movies', 'Series', 'Books'];

function List({tabValue}) {
    const classes = useStyles();

    const [movieReviewsIds, setMovieReviewsIds] = useState([]);
    const [seriesReviewsIds, setSeriesReviewsIds] = useState([]);
    const [bookReviewsIds, setBookReviewsIds] = useState([]);

    useEffect(async () => {
        setMovieReviewsIds([]);
        setSeriesReviewsIds([]);
        setBookReviewsIds([]);

        switch (tabValue) {
            case '1':
                const movieLatestReviewIdsData = await getLatestIdsByType(categories[0].slice(0, -1));
                if (movieLatestReviewIdsData.status === 200) {
                    setMovieReviewsIds(movieLatestReviewIdsData.data);
                }
                const seriesLatestReviewIdsData = await getLatestIdsByType(categories[1]);
                if (seriesLatestReviewIdsData.status === 200) {
                    setSeriesReviewsIds(seriesLatestReviewIdsData.data);
                }
                const bookLatestReviewIdsData = await getLatestIdsByType(categories[2].slice(0, -1));
                if (bookLatestReviewIdsData.status === 200) {
                    setBookReviewsIds(bookLatestReviewIdsData.data);
                }
                break;
            case '2':
                const moviePopularReviewIdsData = await getPopularIdsByType(categories[0].slice(0, -1));
                if (moviePopularReviewIdsData.status === 200) {
                    setMovieReviewsIds(moviePopularReviewIdsData.data);
                }
                const seriesPopularReviewIdsData = await getPopularIdsByType(categories[1]);
                if (seriesPopularReviewIdsData.status === 200) {
                    setSeriesReviewsIds(seriesPopularReviewIdsData.data);
                }
                const bookPopularReviewIdsData = await getPopularIdsByType(categories[2].slice(0, -1));
                if (bookPopularReviewIdsData.status === 200) {
                    setBookReviewsIds(bookPopularReviewIdsData.data);
                }
                break;
        }

    }, [tabValue]);

    return (
        <>
            <div  className={classes.container}>
                <div className={classes.listTitle}>{categories[0]}</div>
                {movieReviewsIds.length === 0 ?
                    <div className={classes.listEmpty}>
                        There is no reviews
                    </div>
                    :
                            <Carousel
                                className={classes.carusel}
                                show={4}
                                slide={1}
                                transition={0.5}
                                infinite={false}
                                dynamic={true}
                                responsive={true}
                                rightArrow={<ArrowForwardIosOutlined className={classes.sliderArrowRight}/>}
                                leftArrow={<ArrowBackIosOutlined className={classes.sliderArrowLeft}/>}
                            >
                                {movieReviewsIds.map((id) => {
                                    return <ListItem style={{width:'200px'}} key={id} type='movie' reviewId={id}/>
                                })}
                            </Carousel>

                }
            </div>
            <Box className={classes.container}>
                <div className={classes.listTitle}>{categories[1]}</div>
                {seriesReviewsIds.length === 0 ?
                    <div className={classes.listEmpty}>
                        There is no reviews
                    </div>
                    :
                    <Carousel
                        className={classes.carusel}
                        show={4}
                        slide={1}
                        dynamic={true}
                        transition={0.5}
                        infinite={false}
                        rightArrow={<ArrowForwardIosOutlined className={classes.sliderArrowRight}/>}
                        leftArrow={<ArrowBackIosOutlined className={classes.sliderArrowLeft}/>}
                    >
                        {seriesReviewsIds.map((id) => {
                            return <ListItem key={id} type='series' reviewId={id}/>
                        })}
                    </Carousel>
                }
            </Box>
            <div className={classes.container}>
                <div className={classes.listTitle}>{categories[2]}</div>
                {bookReviewsIds.length === 0 ?
                    <div className={classes.listEmpty}>
                        There is no reviews
                    </div>
                    :
                    <Carousel
                        className={classes.carusel}
                        show={4}
                        slide={1}
                        transition={0.5}
                        infinite={false}
                        dynamic={true}
                        rightArrow={<ArrowForwardIosOutlined className={classes.sliderArrowRight}/>}
                        leftArrow={<ArrowBackIosOutlined className={classes.sliderArrowLeft}/>}
                    >
                        {bookReviewsIds.map((id) => {
                            return <ListItem key={id} type='book' reviewId={id}/>
                        })}
                    </Carousel>
                }
            </div>
        </>
    );
}

export default List;
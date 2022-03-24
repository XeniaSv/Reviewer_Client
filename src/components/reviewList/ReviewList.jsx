import './stylesReviewList'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import {useRef, useState} from "react";
import useStyles from "./stylesReviewList";
import ReviewItem from "../reviewItem/ReviewItem";

const categories = ['Фильмы', 'Сериалы', 'Книги'];

function ReviewList({list}) {

    const classes = useStyles();

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${300 + distance}px)`;
        }
        if (direction === 'right' && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-300 + distance}px)`;
        }
    }
    return (
        <div className={classes.list}>
            <div className={classes.listTitle}>Reviews</div>
            <div className={classes.wrapper}>
                <ArrowBackIosOutlined className={classes.sliderArrowLeft}
                                      onClick={() => handleClick('left')}
                                      style={{display: !isMoved && 'none'}}
                />
                <div className={classes.container} ref={listRef}>
                    {/*{list.content.map((item, i) => (*/}
                    {/*    <ReviewItem index={i} item={item}/>*/}
                    {/*))}*/}
                    <ReviewItem/>
                    <ReviewItem/>
                    <ReviewItem/>
                    <ReviewItem/>
                    <ReviewItem/>
                    <ReviewItem/>
                </div>
                <ArrowForwardIosOutlined className={classes.sliderArrowRight}
                                         onClick={() => handleClick('right')}
                />
            </div>
        </div>
    );
}

export default ReviewList;
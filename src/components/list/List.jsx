import './stylesList'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import ListItem from '../listItem/ListItem'
import {useRef, useState} from "react";
import useStyles from "../list/stylesList";

const categories = ['Фильмы', 'Сериалы', 'Книги'];

function List({list}) {

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
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === 'right' && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
        <>
            <div className={classes.list}>
                <div className={classes.listTitle}>{categories[0]}</div>
                <div className={classes.wrapper}>
                    <ArrowBackIosOutlined className={classes.sliderArrowLeft}
                                          onClick={() => handleClick('left')}
                                          style={{display: !isMoved && 'none'}}
                    />
                    <div className={classes.container} ref={listRef}>
                        {list.content.map((item, i) => (
                            <ListItem type='movie' index={i} item={item}/>
                        ))}
                    </div>
                    <ArrowForwardIosOutlined className={classes.sliderArrowRight}
                                             onClick={() => handleClick('right')}
                    />
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.listTitle}>{categories[1]}</div>
                <div className={classes.wrapper}>
                    <ArrowBackIosOutlined className={classes.sliderArrowLeft}
                                          onClick={() => handleClick('left')}
                                          style={{display: !isMoved && 'none'}}
                    />
                    <div className={classes.container} ref={listRef}>
                        {list.content.map((item, i) => (
                            <ListItem type='series' index={i} item={item}/>
                        ))}
                    </div>
                    <ArrowForwardIosOutlined className={classes.sliderArrowRight}
                                             onClick={() => handleClick('right')}
                    />
                </div>
            </div>
            <div className={classes.list}>
                <div className={classes.listTitle}>{categories[2]}</div>
                <div className={classes.wrapper}>
                    <ArrowBackIosOutlined className={classes.sliderArrowLeft}
                                          onClick={() => handleClick('left')}
                                          style={{display: !isMoved && 'none'}}
                    />
                    <div className={classes.container} ref={listRef}>
                        {list.content.map((item, i) => (
                            <ListItem type='book' index={i} item={item}/>
                        ))}
                    </div>
                    <ArrowForwardIosOutlined className={classes.sliderArrowRight}
                                             onClick={() => handleClick('right')}
                    />
                </div>
            </div>
        </>

    );
}

export default List;
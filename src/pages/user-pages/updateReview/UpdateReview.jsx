import {useContext, useEffect, useRef, useState} from 'react';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useStyles from './stylesUpdateReview';
import {TextField} from "@mui/material";
import Button from "@material-ui/core/Button";
import {Link, useHistory, useLocation} from "react-router-dom";
import SidebarUser from "../../../components/user-components/sidebarUser/SidebarUser";
import {getReviewById, updateReview} from "../../../context/reviewContext/apiCalls";
import {bookTags, tags} from "../../../tags";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {AuthContext} from "../../../context/authContext/AuthContext";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
styled('input')({
    display: 'none',
});


function UpdateReview() {
    const history = useHistory();
    const classes = useStyles();
    const {search} = useLocation();
    const ref0 = useRef();
    const type = new URLSearchParams(search).get('type');
    const reviewId = new URLSearchParams(search).get('id');
    const reviewTags = type === 'book' ? bookTags : tags;

    const {user} = useContext(AuthContext);

    const [review, setReview] = useState({});

    useEffect(async () => {
        const resReview = await getReviewById(reviewId);
        if (resReview.status === 200) {
            setReview(resReview.data);
        }
    }, [reviewId]);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value !== "")
            setReview({...review, [e.target.name]: value});
        else {
            delete review[e.target.name];
            setReview({...review});
        }
    };
    const handleTagsChanged = (e, values) => {
        if (values.length !== 0)
            setReview({...review, [ref0.current.getAttribute('name')]: values.map((value) => value.title)});
        else {
            delete review[ref0.current.getAttribute('name')];
            setReview({...review});
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        delete review.likes;
        review.author = user.user.id;

        let res = await updateReview(review);
        if (res.status === 400) {
            alert(res.data.message);
            return;
        }
        history.goBack();
    };

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    return (
        <>
            <div className={classes.menu}>
                <Button
                    size="small"
                    variant="contained"
                    edge="start"
                    aria-label="menu"
                    onClick={handleToggle}
                    ref={anchorRef}
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    className={classes.menuButton}
                >
                    ????????
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    style={{zIndex: 999}}
                    className={classes.menuItemContainer}
                >
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',

                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        className={classes.menuList}
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                                            <Link to="/userPage" className="link">
                                                ??????????????
                                            </Link>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                                            <Link to="/movieReviews" className="link">
                                                ???????????????? ???? ????????????
                                            </Link></MenuItem>
                                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                                            <Link to="/seriesReviews" className="link">
                                                ???????????????? ???? ??????????????
                                            </Link>
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                                            <Link to="/bookReviews" className="link">
                                                ???????????????? ???? ??????????
                                            </Link>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
            <Grid className={classes.wrapper} container spacing={2}>
                <Grid className={classes.hide} item xs={2}>
                    <Item><SidebarUser/></Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <div className={classes.newProduct}>
                            <h1>???????????????? ????????????????</h1>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >


                                <Grid className={classes.updateProductItem}>
                                    <TextField
                                        id="outlined-required"
                                        label="???????????????? ????????????????"
                                        value={review.title || ''}
                                        name='title'
                                        type="text"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid className={classes.updateProductItem}>
                                    <Autocomplete
                                        multiple
                                        ref={ref0}
                                        id="tags-standard"
                                        options={reviewTags}
                                        name="tags"
                                        onChange={handleTagsChanged}
                                        className={classes.tags}
                                        getOptionLabel={option => option.title}
                                        value={review.tags?.map(element => reviewTags[reviewTags.findIndex(x => x.title === element)]) || []}
                                        renderInput={params => (
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                label="????????"
                                                name='tags'
                                                type="text"

                                            />
                                        )}
                                    />

                                </Grid>

                                <Grid className={classes.updateProductItem}>
                                    <TextField
                                        id="outlined-required"
                                        label="??????????"
                                        value={review.textReview || ''}
                                        type="text"
                                        name='textReview'
                                        multiline
                                        maxRows={4}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>

                            <Grid>
                                <Button
                                    disabled={Object.keys(review).length !== 11}
                                    className={classes.updateProductButton}
                                    onClick={handleUpdate}>
                                    ????????????????
                                </Button>
                            </Grid>

                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

export default UpdateReview;
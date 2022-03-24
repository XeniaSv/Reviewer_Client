import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStyles from "../reviewModal/stylesReviewModal";
import Avatar from "@mui/material/Avatar";
import {ThumbUpAltOutlined} from "@mui/icons-material";
import {Grid} from "@mui/material";


export default function ReviewModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button
                className={classes.buttonOpen}
                variant="contained"
                size="small"
                onClick={handleOpen}>
                Open review
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography
                        className={classes.title}
                        id="modal-modal-title"
                        variant="h5"
                        component="h2">
                        Название рецензии
                    </Typography>

                    <Avatar
                        className={classes.avatar}
                        alt="Remy Sharp"
                        src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"

                    />
                    <Typography
                        className={classes.info}
                        id="modal-modal-description"
                        variant="h6"
                        sx={{mt: 2}}>
                        Автор
                    </Typography>
                    <Typography className={classes.info} id="modal-modal-description">
                        Дата публикации
                    </Typography>
                    <Button className={classes.button} variant="contained" size="small">
                        <span className={classes.reviewRating}>124</span>
                        <ThumbUpAltOutlined className={classes.reviewIcon}/>
                    </Button>

                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                    >
                        <Grid>
                            <div className={classes.tag}>
                                <span>#movie</span>
                            </div>
                        </Grid>
                        <Grid>
                            <div className={classes.tag}>
                                <span>#fantasy</span>
                            </div>
                        </Grid>
                        <Grid>
                            <div className={classes.tag}>
                                <span>#oskar</span>
                            </div>
                        </Grid>
                    </Grid>
                    <Typography className={classes.text} variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
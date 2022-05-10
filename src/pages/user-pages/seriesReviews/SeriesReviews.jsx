import React, {useContext, useEffect} from 'react';
import SidebarUser from "../../../components/user-components/sidebarUser/SidebarUser";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {DataGrid} from '@mui/x-data-grid';
import useStyles from "../seriesReviews/stylesSeriesReviews";
import {Link} from "react-router-dom";
import {DeleteOutline} from "@material-ui/icons";
import {AuthContext} from "../../../context/authContext/AuthContext";
import {ReviewContext} from "../../../context/reviewContext/ReviewContext";
import {deleteReview, getReviewByAuthorAndType} from "../../../context/reviewContext/apiCalls";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function SeriesReviews() {
    const classes = useStyles();
    const {user} = useContext(AuthContext);
    const {reviews, dispatch} = useContext(ReviewContext);

    useEffect(() => {
        getReviewByAuthorAndType(user.user.id, 'Series', dispatch);
    }, [dispatch, user.user.id]);

    const handleDelete = (id) => {
        deleteReview(id, dispatch);
    };

    const columns = [

        {field: 'id', headerName: 'ID', width: 70},
        {field: 'itemTitle', headerName: 'Сериал', width: 130},
        {field: 'title', headerName: 'Название рецензии', width: 150},
        {field: 'createdAt', headerName: 'Дата', type: 'date', width: 130},
        {field: 'tags', headerName: 'Тэги', width: 200},
        {field: 'likes', headerName: 'Лайки', width: 90},
        {field: 'textReview', headerName: 'Текст', width: 400},

        {
            field: "action",
            headerName: "Действия",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{pathname: '/updateReview', search: `?type=series&id=${params.id}`}}>
                            <button className={classes.edit}>Изменить</button>
                        </Link>
                        <DeleteOutline
                            className={classes.delete}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <Grid className={classes.wrapper} style={{marginTop: '70px'}} container spacing={2}>
            <Grid className={classes.hide} item xs={2}>
                <Item><SidebarUser/></Item>
            </Grid>
            <Grid item xs={10}>
                <Item>
                    <div className={classes.productList} style={{height: 400, width: '100%'}}>
                        <DataGrid
                            rows={reviews}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            className={classes.table}
                        />
                    </div>
                </Item>
            </Grid>
        </Grid>

    );
}

export default SeriesReviews;
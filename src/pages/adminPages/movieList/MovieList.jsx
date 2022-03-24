import React, {useContext, useEffect} from 'react';
import {DataGrid} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import {MovieContext} from "../../../context/movieContext/MovieContext";
import {deleteMovie, getMovies} from "../../../context/movieContext/apiCalls";
import Button from "@material-ui/core/Button";
import useStyles from './stylesMovieList';
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebarAdmin/SidebarAdmin";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MovieList() {
    const classes = useStyles();
    const {movies, dispatch} = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch])

    const handleDelete = (id) => {
        deleteMovie(id, dispatch);
    };


    const columns = [
        {field: "id", headerName: "ID", width: 90},
        {
            field: "title",
            headerName: "Title",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={classes.productListItem}>
                        <img className={classes.productListImg} src={params.row.imgSm} alt=""/>
                        {params.row.title}
                    </div>
                );
            },
        },
        {field: "director", headerName: "Director", width: 120},
        {field: "year", headerName: "Year", width: 120},
        {field: "duration", headerName: "Duration", width: 120},
        {field: "genre", headerName: "Genre", width: 120},
        {field: "limit", headerName: "limit", width: 120},
        {field: "cast", headerName: "Cast", width: 120},
        {field: "desc", headerName: "Description", width: 200},
    ];

    return (
        <>
            <Topbar/>
            <Link to={{pathname: '/adminNewItem', search: '?type=movie'}} className='link'>
                <Button className={classes.button} variant="outlined">ADD NEW MOVIE</Button>
            </Link>
            <Grid className={classes.wrapper} container spacing={2}>
                <Grid className={classes.hide} item xs={2}>
                    <Item><Sidebar/></Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <div className={classes.productList}>
                            <DataGrid
                                rows={movies}
                                disableSelectionOnClick
                                columns={columns}
                                pageSize={8}
                                checkboxSelection
                                getRowId={(r) => r.id}
                                className={classes.table}
                            />
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>

    );
}
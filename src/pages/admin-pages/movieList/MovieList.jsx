import React, {useContext, useEffect} from 'react';
import {DataGrid} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import {MovieContext} from "../../../context/movieContext/MovieContext";
import {deleteMovie, getMovies} from "../../../context/movieContext/apiCalls";
import Button from "@material-ui/core/Button";
import useStyles from './stylesMovieList';
import Topbar from "../../../components/general-components/topbar/Topbar";
import Sidebar from "../../../components/admin-components/sidebarAdmin/SidebarAdmin";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {DeleteOutline} from "@material-ui/icons";
import storage from "../adminPage/firebase";

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

    const handleDelete = async (params) => {
        storage.refFromURL(params.row.img).delete();
        storage.refFromURL(params.row.imgSm).delete();

        deleteMovie(params.row.id, dispatch);
    };


    const columns = [
        {field: "id", headerName: "ID", width: 100},
        {
            field: "title",
            headerName: "Название",
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
        {field: "director", headerName: "Режиссер", width: 150},
        {field: "year", headerName: "Год", width: 120},
        {field: "duration", headerName: "Длительность", width: 170},
        {field: "genre", headerName: "Жанр", width: 120},
        {field: "limit", headerName: "Лимит", width: 120},
        {field: "cast", headerName: "Актеры", width: 150},
        {field: "desc", headerName: "Аннотация", width: 200},
        {
            field: "action",
            headerName: "Действия",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{pathname: '/adminUpdateItem', search: `?type=movie&id=${params.id}`}}>
                            <button className={classes.productListEdit}>Изменить</button>
                        </Link>
                        <DeleteOutline
                            className={classes.productListDelete}
                            onClick={() => handleDelete(params)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <>
            <Topbar/>
            <Link to={{pathname: '/adminNewItem', search: '?type=movie'}} className='link'>
                <Button className={classes.button} variant="outlined">ДОБАВИТЬ НОВЫЙ ФИЛЬМ</Button>
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
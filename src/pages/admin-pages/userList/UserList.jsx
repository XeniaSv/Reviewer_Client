import {DataGrid} from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import React, {useContext, useEffect} from "react";
import useStyles from "./stylesUserList";
import Topbar from "../../../components/general-components/topbar/Topbar";
import Grid from "@mui/material/Grid";
import Sidebar from "../../../components/admin-components/sidebarAdmin/SidebarAdmin";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {UserContext} from "../../../context/userContext/UserContext";
import {deleteUser, getUsers} from "../../../context/userContext/apiCalls";
import {AuthContext} from "../../../context/authContext/AuthContext";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function UserList() {
    const classes = useStyles();
    const {users, dispatch} = useContext(UserContext);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch])

    const handleDelete = (id) => {
        if (user.user.id === id) {
            alert("You can't delete yourself");
            return;
        }
        deleteUser(id, dispatch);
    };

    const columns = [
        {field: "id", headerName: "ID", width: 100},
        {
            field: "username",
            headerName: "Имя",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={classes.userListUser}>
                        {params.row.username}
                    </div>
                );
            },
        },
        {field: "email", headerName: "Почта", width: 200},

        {
            field: "isAdmin",
            headerName: "Админ",
            width: 160,
        },

        {
            field: "createdAt",
            headerName: "Дата регистрации",
            width: 200,
        },

        {
            field: "action",
            headerName: "Удалить",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteOutline
                            className={classes.userListDelete}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <>
            <Topbar/>
            <Grid className={classes.wrapper} container spacing={2}>
                <Grid className={classes.hide} item xs={2}>
                    <Item><Sidebar/></Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <div className={classes.userList}>
                            <DataGrid
                                rows={users}
                                disableSelectionOnClick
                                columns={columns}
                                pageSize={8}
                                className={classes.table}
                            />
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

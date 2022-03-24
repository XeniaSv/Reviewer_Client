import {DataGrid} from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {userRows} from "../../adminPage/dummyData";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import useStyles from "./stylesUserList";
import Topbar from "../../../components/topbar/Topbar";
import Grid from "@mui/material/Grid";
import Sidebar from "../../../components/sidebarAdmin/SidebarAdmin";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function UserList() {
    const classes = useStyles();
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {field: "id", headerName: "ID", width: 90},
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={classes.userListUser}>
                        <img className={classes.userListImg} src={params.row.avatar} alt=""/>
                        {params.row.username}
                    </div>
                );
            },
        },
        {field: "email", headerName: "Email", width: 200},
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className={classes.userListEdit}>Edit</button>
                        </Link>
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
                                rows={data}
                                disableSelectionOnClick
                                columns={columns}
                                pageSize={8}
                                checkboxSelection
                                className={classes.table}
                            />
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

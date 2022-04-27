import React from 'react';
import Avatar from "@mui/material/Avatar";
import {Box} from "@mui/material";
import TextField from '@mui/material/TextField';
import useStyles from './stylesProfile'

function Profile(props) {
    const classes = useStyles();
    return (
        <div className={classes.profile}>
            <Avatar
                alt="Remy Sharp"
                src="https://avatars.mds.yandex.net/get-pdb/1996600/d1725ec1-41d3-4b2c-ab24-91ec603557bf/s375"
                className={classes.avatar}
            />
            <Box className={classes.container}
            >
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Имя"
                    defaultValue="Иван Иванов"
                    variant="standard"
                />
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Почта"
                    defaultValue="ivanov@mail.ru"
                    variant="standard"
                />
            </Box>
        </div>
    );
}

export default Profile;
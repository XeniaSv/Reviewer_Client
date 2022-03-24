import React from 'react';
import Avatar from "@mui/material/Avatar";
import {Box} from "@mui/material";
import TextField from '@mui/material/TextField';


function Profile(props) {
    return (
        <div style={{height: 'calc(100vh - 50px)'}}>
            <Avatar
                alt="Remy Sharp"
                src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"
                sx={{width: 200, height: 200, borderRadius: 0, float: 'left', marginRight: '10px'}}
            />
            <Box sx={{
                display: 'flex',
                '& .MuiTextField-root': {margin: '20px', width: '250px'},
            }}
            >
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Username"
                    defaultValue="Little Prince"
                    variant="standard"
                />
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Email"
                    defaultValue="littleprince@mail.ru"
                    variant="standard"
                />
            </Box>
        </div>
    );
}

export default Profile;
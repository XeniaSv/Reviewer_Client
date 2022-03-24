import useStyles from './stylesFeatured'
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box} from "@mui/material";
import {TabContext} from "@mui/lab";

function Featured({type, setGenre}) {
    const [content, setContent] = useState({});
    const classes = useStyles();

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
                    }
                });
                setContent(res.data[0]);
            } catch (e) {
                console.log(e)
            }
        };
        getRandomContent();
    }, [type])
    return (

        <Box className={classes.nav}>
            <TabContext value={value}>
                <Tabs className={classes.tab} value={value} onChange={handleChange} centered>
                    <Tab value="1" label="Недавние"/>
                    <Tab value="2" label="Высокий рейтинг"/>
                </Tabs>
            </TabContext>
        </Box>

    );
}

export default Featured;
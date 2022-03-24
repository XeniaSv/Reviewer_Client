import './home.scss';
import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import {useEffect, useState} from "react";
import axios from "axios";


function Home({type}) {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomList = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
                        }
                    }
                );

                console.log(res)

                setLists(res.data);
            } catch (e) {
                console.log(e)
            }
        };
        getRandomList();
    }, [type, genre])
    return (
        <div className="home">
            <Navbar/>
            <Featured/>
            {lists.map((list) => (
                <List list={list}/>
            ))}
        </div>
    );
}

export default Home;
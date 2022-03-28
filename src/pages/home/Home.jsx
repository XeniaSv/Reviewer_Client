import './home.scss';
import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import * as React from "react";

function Home() {
    const [tabValue, setTabValue] = React.useState('1');

    return (
        <div className="home">
            <Navbar/>
            <Featured tabValue={tabValue} setTabValue={setTabValue}/>
            <List tabValue={tabValue}/>
        </div>
    );
}

export default Home;
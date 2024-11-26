import React from 'react'
import './Home.css';
import Cards from '../../Components/Cards/Cards.js'
import { THEMES } from '../../Config/data.js';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <p className='title' style={{ color: THEMES.headline }}>Room List</p>

            <Link to="/add">
                <ion-icon id="Icon" name="add-circle-sharp"></ion-icon>
            </Link>

            <Cards />
        </>
    )
}

export default Home;
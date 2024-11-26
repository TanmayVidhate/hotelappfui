import React, { useEffect, useState } from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { THEMES } from '../../Config/data';

function Detail() {
    const { roomNo } = useParams();
    const [rooms, setRooms] = useState({});

    const LoadRoomData = async (roomNo) => {
        const response = await axios.get(`http://localhost:5002/hotels/${roomNo}`);
        setRooms(response.data.data);
    }

    useEffect(() => {
        LoadRoomData(roomNo);
    }, [roomNo]);

    

    return (
        <>
            <p className='heading' style={{color:THEMES.headline}}>Room Details </p>
            
            <div className='room-details-card' style={{background:THEMES.main,color:THEMES.text}}>
                <p className='room-no'>Room No :{rooms?.roomNo}</p>
                <p className='room-type'>Room Type :{rooms?.type}</p>
                <p className='room-facility'>Facility :{rooms?.facility}</p>
                <p className='room-describation'>Descripation :{rooms?.descripation}</p>
                <p className='room-days'>Days :{rooms?.days}</p>
            </div>
        </>
    )
}

export default Detail;
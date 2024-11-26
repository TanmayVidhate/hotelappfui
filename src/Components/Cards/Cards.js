import React, { useEffect, useState } from 'react';
import './Cards.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { THEMES } from '../../Config/data.js';

const Cards = () => {

    const navigate = useNavigate();

    const [Hotels, setHotel] = useState();

    const loadHotelsData = async () => {

        const resopnse = await axios.get("http://localhost:5002/hotels");
        setHotel(resopnse.data.data);
        // console.log(Hotels);
    }

    const deleteRoom = async (roomNo) => {
        await axios.delete(`http://localhost:5002/hotels/${roomNo}`);
        window.location.reload();
    }

    useEffect(() => {
        loadHotelsData();
    }, []);

    return (
        <>
            <div className='main'>
                {
                    Hotels?.map(({ roomNo, status, days }, i) => (
                        <div className="card" key={i} style={{ backgroundColor: THEMES.main }}
                            onClick={(e) => {
                                navigate(`/detail/${roomNo}`);
                            }}>

                            <div className="container">
                                <p><b>RoomNo :{roomNo}</b></p>
                            </div>

                            <div className='room-status'>
                                <p>{(status === true) ? <p>Avilable 😀</p> : <p>Booked 🤝</p>} </p>
                            </div>

                            {/* <div className='days-counter'>
                                <p>{(!status === true) ? <p>Time left</p>: <p></p> }</p>
                            </div> */}

                            <div className='btn'>
                                <input
                                    type='submit'
                                    name='btn'
                                    value="Delete"
                                    style={{ backgroundColor: THEMES.btnColor, color: THEMES.btntext }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteRoom(roomNo);

                                    }}
                                />
                            </div>
                        </div>

                    ))
                }
            </div>
        </>
    );
}
export default Cards;

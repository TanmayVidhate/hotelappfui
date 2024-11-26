import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Form() {
    const [hotels, setHotel] = useState({
        roomNo: "",
        type: "",
        status: "",
        facility: "",
        descripation: "",
        days: ""
    })

    const addHotelsInfo = async () => {
        try {
            const response = await axios.post("http://localhost:5002/hotels", {
                roomNo: hotels.roomNo,
                type: hotels.type,
                status: hotels.status,
                facility: hotels.facility,
                descripation: hotels.descripation,
                days: hotels.days
            }
            );

            setHotel({
                roomNo: "",
                type: "",
                status: "",
                facility: "",
                descripation: "",
                days: ""
            });

            (response.data.success == true) ? toast.success("Details Add Successfully") : toast.error(response.data.message);


        }
        catch (error) {
            toast.error(error);
        }

    }
    return (
        <>
            <form >
                <div className="form-group">
                    <input type="number" id="name" name="name" value={hotels.roomNo} placeholder="Enter Room No" required
                        onChange={(e) => setHotel(
                            {
                                ...hotels,
                                roomNo: e.target.value,
                            }
                        )}
                    />
                </div>
                <div className="form-group">
                    <input type="text" value={hotels.type} placeholder="Enter Room Type" required
                        onChange={(e) => setHotel(
                            {
                                ...hotels,
                                type: e.target.value,
                            }
                        )}
                    />
                </div>
                <div className="form-group">
                    <input type="text" value={hotels.status} placeholder="Enter Room Status" required
                        onChange={(e) => {
                            setHotel({
                                ...hotels,
                                status: e.target.value,
                            })
                        }}
                    />
                </div>
                <div className="form-group">
                    <input type="text" value={hotels.facility} placeholder="Enter Facility" required
                        onChange={(e) => {
                            setHotel({
                                ...hotels,
                                facility: e.target.value
                            })
                        }}
                    />
                </div>
                <div className="form-group">
                    {/* <textarea id="descripations" name="message" rows="4" placeholder="Type your Room descripations here..." required></textarea> */}
                    <input type="text" value={hotels.descripation} placeholder="Enter Room descripations" required
                        onChange={(e) => {
                            setHotel({
                                ...hotels,
                                descripation: e.target.value,
                            })
                        }}
                    />
                </div>
                <div className="form-group">
                    <input type="text" value={hotels.days} placeholder="Enter Days" required
                        onChange={(e) => {
                            setHotel({
                                ...hotels,
                                days: e.target.value,
                            })
                        }}
                    />
                </div>

                <div className="form-group">
                    <button type='button' className="submit-btn"
                        onClick={() => { addHotelsInfo() }} >Submit</button>
                </div>
            </form>

            <Toaster />
        </>
    )
}

export default Form
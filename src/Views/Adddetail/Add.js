import React from 'react'
import "./Add.css"
import Form from '../../Components/Form/Form.js'
import { THEMES } from '../../Config/data.js'
import { Link } from 'react-router-dom'
function Add() {
  return (
    <>
      <p className='heading' style={{ color: THEMES.headline }}>Add Room Details </p>

      <Link to="/">
      <ion-icon className="back-icon" name="chevron-back-circle-sharp"></ion-icon>
      </Link>
      
      <Form />
    </>
  )
}

export default Add;
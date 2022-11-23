import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Alert, Button,Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EBreadcrumb from '../../components/Breadcrumb';
import './AddData.css'

const AddData = () => {

    const navigate = useNavigate()
    const[alert,setAlert]=useState({
        status:false,
        message:'',
    })

    const [form,setForm] = useState({
        wantedJobTitle:'',
        firstName:'',
        lastName:'',
        country:'',
        address:'',
        city:'',
        postalCode:'',
        nationality:'',
        drivingLicense:'',
        placeOfBirth:'',
        dateOfBirth:''
    })

    const handleChange = async(e)=>{
        try {
            setForm({...form,[e.target.name]:e.target.value})
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit =async(event)=>{
        event.preventDefault();
        try {
                const response = await axios.post('http://localhost:3000/profile',{
                    wantedJobTitte:form.wantedJobTitle,
                    firstName:form.firstName,
                    lastName:form.lastName,
                    country:form.country,
                    address:form.address,
                    city:form.city,
                    postalCode:form.postalCode,
                    nationality:form.nationality,
                    drivingLicense:form.drivingLicense,
                    placeOfBirth:form.placeOfBirth,
                    dateOfBirth:form.dateOfBirth,
                    profileCode:142
                })
                console.log(form.drivingLicense, typeof form.drivingLicense)
                navigate('/list')
        } catch (error) {
            
            setAlert({status:true,message:error.response.data.data})
            console.log(error)
        }
    }


       

  return (
    <div className='addData p-3'>

        {alert.status&& <Alert variant='danger'>{alert.message}</Alert>}
        <EBreadcrumb title1={'List'} title2={'Add'} url={'/list'}/>
        
        <Form>
            <div className='kolom1'>
                <h5 className="mb-3">Personal detail</h5>
              
                    <Form.Label className="formLabel">Wanted Job Title</Form.Label>
                    <Form.Control className="formControl" type="text" value={form.wantedJobTitle} name="wantedJobTitle" onChange={handleChange} />
                        
                    <Form.Label className="formLabel">First Name</Form.Label>
                    <Form.Control className="formControl" type="text" value={form.firstName} name="firstName" onChange={handleChange} />

                    <Form.Label className="formLabel">Country</Form.Label>
                     <Form.Control className="formControl" type="text" value={form.country} name="country" onChange={handleChange} />
                
                    <Form.Label className="formLabel">Address</Form.Label>
                     <Form.Control className="formControl" type="text" value={form.address} name="address" onChange={handleChange} />
            
                    <Form.Label className="formLabel">Place Of Birth</Form.Label>
                     <Form.Control className="formControl" type="text" value={form.placeOfBirth} name="placeOfBirth" onChange={handleChange} />
                

                <Button className="mt-4" variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            </div>
            <div className='kolom2'>
              
                    <Form.Label className="formLabel">Last Name</Form.Label>
                     <Form.Control className="formControl mb-2" type="text" value={form.lastName} name="lastName" onChange={handleChange} />
              
                    <Form.Label className="formLabel">City</Form.Label>
                     <Form.Control className="formControl" type="text" value={form.city} name="city" onChange={handleChange} />
            
                    <Form.Label className="formLabel">Postal Code</Form.Label>
                    <Form.Control className="formControl" type="text" value={form.postalCode} name="postalCode" onChange={handleChange} />
                
                    <Form.Label className="formLabel">Nationality</Form.Label>
                     <Form.Control className="formControl" type="text" value={form.nationality} name="nationality" onChange={handleChange} />
                
                    <Form.Label className="formLabel">Driving License</Form.Label>
                    <Form.Control  className="formControl" type="text" value={form.drivingLicense} name="drivingLicense" onChange={handleChange}/>
                
                    <Form.Label className="formLabel">Date Of Birth</Form.Label>
                    <Form.Control className="formControl" type="text" value={form.dateOfBirth} name="dateOfBirth" onChange={handleChange} />
                
            </div>          
        </Form>
    </div>
  )
}

export default AddData
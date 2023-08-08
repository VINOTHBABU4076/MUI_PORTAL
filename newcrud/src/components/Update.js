import React,{useState,useEffect} from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import { API_URL } from '../Constants/Url'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

 const Update = () => {
     
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[checked,setChecked]=useState(false)
    const[id,setId]=useState('')
    const navigate=useNavigate();

    const updateuser = async() =>{
        await axios.put(API_URL + id,{
            firstName,
            lastName,
            checked
         })
         navigate('/Read')

    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setChecked(localStorage.getItem('checked'))
    },[])
  return (
    <Form className='form'>
      <Form.Field>
        <label>First Name</label> 
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='Enter first Name'
        />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Last Name</label> 
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Enter Last Name'
        />
      </Form.Field>
      <br />
      <Form.Field>
        <Checkbox onChange={() => setChecked(!checked)} label='Agree terms and conditions' />
      </Form.Field>
      <br />
      <Button onClick={updateuser}>Update</Button>
    </Form>
  )
}
export default Update

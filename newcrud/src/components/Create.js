import React, { useState } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { API_URL } from '../Constants/Url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate=useNavigate();

  const postData = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      checked,
    });
    navigate('/read')
  };

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
      <Button onClick={postData}>Submit</Button>
    </Form>
  );
}

export default Create;

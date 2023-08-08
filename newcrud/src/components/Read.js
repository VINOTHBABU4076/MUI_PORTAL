import React,{useState,useEffect} from 'react'
import {Table,Button} from 'semantic-ui-react'
import { API_URL } from '../Constants/Url';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

 const Read = () => {
    const[apiData,setAPIData]=useState([]);
    const navigate=useNavigate();


    const updateuser =({firstName,lastName,checked,id}) =>{

        localStorage.setItem('id',id)
        localStorage.setItem('firstName',firstName)
        localStorage.setItem('lastName',lastName)
        localStorage.setItem('checked',checked)

        navigate('/Update')

    }

    const deleteuser =async (id) =>{
       await axios.delete(API_URL + id)
       callGetAPI() 
    }

    const callGetAPI= async ()=>{
              const response= await axios.get(API_URL)
              setAPIData(response.data)
    }

      useEffect (()=>{ 
        callGetAPI();


      },[])

  return (
    <Table singleLine>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Checked</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>


                
                 </Table.Row>
                 </Table.Header>
                 <Table.Body>
                    {
                        apiData.map(data=>(
                            <Table.Row key={data.id}>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checked ?'checked' :'Notchecked'}</Table.Cell>
                        <Table.Cell><Button onClick={() =>deleteuser(data.id)}>Delete</Button></Table.Cell>
                        <Table.Cell><Button onClick={() =>updateuser(data)}>Update</Button></Table.Cell>


                        </Table.Row> 

                        ))
                    }             
                        </Table.Body>

    </Table>
    
  )
}
export default  Read
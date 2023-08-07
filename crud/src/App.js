import { useSelector, useDispatch} from "react-redux";
import React,{useState} from 'react'
import "./App.css";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { add, remove, update } from './redux/User';


function App() {
  const { users } = useSelector(state => state.user)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td><button onClick={() => dispatch(remove(u.id))}>Delete</button></td>
                  <td><button onClick={() => dispatch(update({ id: u.id, name: "update" }))}>Update</button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
      <div>
        <label>Id:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={() => {
          if (!id || !name) {
            return
          }
          dispatch(add({ id: id, name: name }))
          setId('')
          setName('')
        }}>Add</button>
      </div>
    </div>
  );
}

export default App;
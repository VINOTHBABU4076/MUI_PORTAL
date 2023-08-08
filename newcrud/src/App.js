import './App.css';
import Create from './components/Create'
import Update from './components/Update'
import Read from './components/Read'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="main">
     CRUD Opertaions
     <BrowserRouter>
     <Routes>
      <Route exact path="/Create" element={<Create/> }/>

      <Route exact path="/Update" element={<Update/> }/>

      <Route exact path="/Read" element={<Read/> }/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

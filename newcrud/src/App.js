import './App.css';
import Update from './components/Update'
import Read from './components/Read'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './components/Create';


function App() {
  return (
    <div className="main">
     CRUD Opertaions
     <BrowserRouter>
     
     <Routes>
      <Route  path="/Create" element={<Create/> }/>

      <Route  path="/Update" element={<Update/> }/>

      <Route  path="/Read" element={<Read/> }/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

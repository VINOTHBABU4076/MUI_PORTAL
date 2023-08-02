import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Company from './Components/Company'
import Nomatch from './Components/Nomatch';
import Products from './Components/Products'
import Featured from './Components/Featured';
import New from './Components/New';
import Users from './Components/Users'
import Admin from './Components/Admin'
import UserDeatils from './Components/UserDetails'
function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Company Bio' element={<Company />}></Route>
        <Route path="*" element={<Nomatch/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route path='Featured' element={<Featured/>}></Route>
          <Route path='New' element={<New/>}></Route>
        </Route>
        <Route path='Users' element={<Users/>}>
        <Route path=':userId' element={<UserDeatils/>}></Route>
        <Route path='Admin' element={<Admin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

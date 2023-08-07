import './App.css'
import Changecolor from './components/ChangeColor';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <Logout />
      <Changecolor />
     
   
    </div>
  );
}

export default App;

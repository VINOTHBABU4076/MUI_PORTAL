    import React from 'react'
    import {useDispatch} from 'react-redux'
    import { login} from '../features/User';

    const Login = () => {
        const dispatch=useDispatch();
        const handleLogin = () => {
            const user = {
              name: 'Vinoth',
              age: 50,
              Email: 'Vinoth@gmail.com',
            };
        
            dispatch(login(user));
          };
        
    return (
        <div>
            <button onClick={handleLogin}> Login </button>
        </div>
    )
    }
    export default Login
    
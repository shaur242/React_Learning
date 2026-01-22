import React, {useState, useContext} from 'react';
import UserContext from '../Context/UserContext';

function Login() {
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password})
}
  return (
    <div>
      <h2>Login</h2>
      <input type='text'
       placeholder='username'
       value={username}
      onChange={(e) =>
       SetUsername(e.target.value) }/>
      {" "}
      <input type='text' placeholder='password'value={password}
      onChange={(e) => SetPassword(e.target.value) } />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

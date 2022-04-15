import { useState, useContext, createContext } from "react";
import { Link } from 'react-router-dom';

const UserLogIn = createContext();

const Login = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        password: password,
      })
    }).then(res => res.json())
    .then(data => console.log(data))
    setMessage(`Success! Welcome Back ${name}!`)
  };

  return (
    <main>
    <div>
        <form>
          <h1 style={{textAlign: "center", color:'white', paddingTop: 90}}>Sign in to Your Account</h1>
          <div>
            <input style={{width:"300px", marginBottom: "5px", marginTop: "15px"}}
              type="name"
              className="form-control"
              id="name"
              name="name"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
            
          </div>
          <div>
            <input style={{width:"300px"}}
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            
          </div>

          <button
            onClick={handleLogIn}
            className="w-100 btn btn-lg "
            type="submit"
            style={{backgroundColor: "teal", color: "white", marginTop:"50px"}}
          >
            Sign in
          </button>
        </form>
        <br></br>
        <p style={{textAlign: "center", color:'white'}}>New here? Please <Link style={{textAlign: "center", color:'white', fontSize:'1.25em'}} to="/">Signup</Link></p>
        <UserLogIn.Provider value={message}>
        <p>{message}</p>
        </UserLogIn.Provider>
    </div>
    </main>
  );
};

export default Login;

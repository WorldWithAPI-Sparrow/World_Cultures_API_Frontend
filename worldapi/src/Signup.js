import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !password) return;
    fetch("http://localhost:3000/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          name: name,
          password: password,
        }),
    }).then(res => res.json())
    .then(data => console.log(data))

    setMessage(`Howdy! ¡Hola! Bonjour! Bonjour! Konnichiwa! Guten Tag! Asalaam alaikum! Asalaam alaikum! Shalom!!! Welcome to the World of Cultures API ${name}`)
    navigate('/login');
  };


  return (
    <main>
    <div >
        <form action="/signup" method="post">
          <h1 style={{textAlign: "center", color:'white', paddingTop: 90}}>Create Your Account</h1>
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
            onClick={handleSignUp}
            className="w-100 btn btn-lg"
            type="submit"
            style={{backgroundColor: "teal", color: "white", marginTop:"50px"}}
          >
            Sign up
          </button>
        </form>
        <br></br>
        <p style={{textAlign: "center", color:'white'}}>Already an user? Please <Link style={{textAlign: "center", color:'white', fontSize:'1.25em'}} to="/login">Login</Link></p>
        
        <p style={{textAlign: "center"}}>{message}</p>
        
       
    </div>
    </main>
  );
};

export default Signup;


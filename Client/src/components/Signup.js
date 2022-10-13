import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    const [name, setName] = useState("");
    const [userName, setUser] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = () => {
        fetch("/signup", {
            method:"post",
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify({
              name,
              username:userName,
              password
            })
          })
          .then(res=> res.json())
          .then((data)=> {
            if(data.error) {
            //   M.toast({html: data.error,classes:"#c62828 red darken-3"})
            console.log(data.error)
            }
            else {
            //   M.toast({html:data.message,classes:"#43a047 green darken-1"})
            //   navigate('/signin');
            console.log("done")
            }
          }).catch(err=>console.log(err))
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <div className="grp">
                <label for="">Name:</label>
                <input type="text" name="Name" className="inputs" required id="FullName" value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="grp">
                <label for="" >Username:</label>
                <input type="text" name="username" className="inputs" required id="Username" value={userName}
                    onChange={(e) => setUser(e.target.value)}
                />
            </div>
            <div className="grp">
                <label for="" >Password:</label>
                <input type="password" name="password" className="inputs" required id="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="register">
                <Link to='/'>Already a User? Login..</Link>
            </div>
            <button className="btn"
                onClick={() => registerUser()}
            >Register</button>
        </div>
    )
}

export default Signup
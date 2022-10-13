import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Signin = () => {
    const [user,setUser]=useState("");
    const [pass,setPass]=useState("");
    const navigate = useNavigate()
    const SignUser=()=> {
        fetch('/signin',{
            method:'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username:user,
                password:pass
            })
        })
        .then(res=>res.json())
        .then((result)=> {
            if(result.error) {
                console.log(result.error)
            }
            else {
                localStorage.setItem("jwt",result.token)
                localStorage.setItem("user",JSON.stringify(result.user))
                localStorage.setItem("userWebs",JSON.stringify(result.obj))
                console.log("siginin done");
                
                navigate('/signup')
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <div class="container">
                    <h1>Login</h1>
                    <div class="grp">
                        <label for="">Username</label>
                        <input type="text" class="inputs" name="username" required id="Username" 
                        onChange={(e)=>setUser(e.target.value)}
                        />
                    </div>
                    <div class="grp">
                        <label for="">Password</label>
                        <input type="password" class="inputs" name="password" required id="Pass"
                        onChange={(e)=>setPass(e.target.value)}
                        />
                    </div>
                    <button class="btn"
                    onClick={()=>SignUser()}
                    >Signin</button>
                    <div class="register">
                        <Link to="/signup"> Register </Link>
                    </div>
            </div>
        </div>
    )
}

export default Signin
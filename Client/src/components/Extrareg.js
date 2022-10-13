import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const ExtraReg = () => {
    const [lists, setLists] = useState([])
    const [usernames,setUsers]=useState([])
    const [passwords,setPasswords]=useState([])
    const onSubmitting=(e)=> {
        let obj={};
        usernames.map((users)=> {
            obj[{}]={users}
        })
    }
    return (
        <div className="container">
            <label >
                <input type="checkbox" onClick={() => setLists([...lists, "Instagram"])} />
                Instagram
            </label>
            <br />
            <label>
                <input type="checkbox" onClick={() => setLists([...lists, "FaceBook"])} />
                FaceBook
            </label>
            <br />
            <label>
                <input type="checkbox" onClick={() => setLists([...lists, "LinkedIn"])} />
                LinkedIn
            </label>
            <br />
            <label>
                <input type="checkbox" onClick={() => setLists([...lists, "Reddit"])} />
                Reddit
            </label>
            <br />
            <label>
                <input type="checkbox" onClick={() => setLists([...lists, "Codeforces"])} />
                Codeforces
            </label>
            <br />
            {
                lists.map((ele) => {
                    return (
                        <>
                            <h6>{ele}:</h6>
                            <label>Username:</label>
                            <input type="text" name={ele + 'u'} onClick={(e)=>setUsers([...usernames,e.target.value])}/>
                            <br /><br />
                            <label>Password:</label>
                            <input type="password" name={ele + 'p'} onClick={(e)=>setPasswords([...passwords,e.target.value])}/>
                            <br /><br />
                        </>
                    )
                })
            }
             <button onClick={()=>onSubmitting()}>Submit</button>

        </div>
    )

}

export default ExtraReg
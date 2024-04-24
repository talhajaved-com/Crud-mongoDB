import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async(e) => {
        e.preventDefault()
       let result = await fetch('http://localhost:4000/register',{
            method: "post",
            body: JSON.stringify({name,address,email,password}),
            headers:{
                "Content-Type": "application/json"
            }
        })
        result = result.json();
        console.log("==================",result)
       
    }


    return (
        <>
            <form>
                Name: <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                address: <input type="text" name='address' value={address} onChange={(e) => setAddress(e.target.value)} /><br /><br />
                email: <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                password: <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <button onClick={registerUser}>Signup</button>
            </form>
        </>
    )
}

export default Register

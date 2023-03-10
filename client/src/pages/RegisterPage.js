import {useState} from "react";


export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'}
        })
        if(response.status === 200) {
            alert('Registration succesful')
        } else {
            alert('Registration failed')
        }
    }

/*This attribute sets an event listener for the "onChange" event of the input field.
When the user changes the value of the input field, this event is triggered and the
function specified in the attribute is called. In this case, the function updates the
value of the "username" state variable with the current value of the input field,
which is obtained from ev.target.value.*/

    return (
        <form className="register" onSubmit={register}>
            <h1>Registration Page</h1>
            <input type="text" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}></input>
            <button>Register</button>
        </form> 
    )
}
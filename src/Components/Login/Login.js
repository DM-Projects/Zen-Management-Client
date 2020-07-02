import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import './login.css'
const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        return alert('submitting form!');
    }

    return (
        <React.Fragment>
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" id="email" className={"input"} onChange={onEmailChange}/>
                    <input type="password" name="password" id="password" className={"input"} onChange={onPasswordChange}/>
                    <Button variant={"contained"} color={"primary"} type="submit">Log in</Button>
                </form>
            </section>
        </React.Fragment>
    )
}

export default Login;
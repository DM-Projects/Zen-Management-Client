import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import './login.scss';

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
                    <label htmlFor="email">Email</label>
                    <input type="password" name="password" id="password" className={"input"} onChange={onPasswordChange}/>
                    <label htmlFor="password">Password</label>
                    <Button variant={"contained"} color={"primary"} type="submit" className={"submit_btn"}>Log in</Button>
                </form>
            </section>
        </React.Fragment>
    )
}
export default Login;
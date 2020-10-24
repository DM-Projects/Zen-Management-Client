import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import './login.scss';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmail, setIsEmail] = useState(true);
    const EMAIL_MESSAGE = "Email is not valid";

    const onEmailChange = (event) => {

        let email = event.target.value;

        if(email.indexOf("@") == -1){
            return setIsEmail(false);
        }

        setEmail(email)
        setIsEmail(true);

    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        return console.log(email, password)
    }

    return (
        <React.Fragment>
            <section className="form-wrapper">
                <form onSubmit={handleSubmit} className={"form"}>
                    <input type="email" name="email" id="email" className={"input"} onChange={onEmailChange} style={{
                        borderColor: isEmail ? "green" : "red",
                    }}/>
                    {isEmail ?
                        <label htmlFor="email">Email</label> :
                        (<label>{EMAIL_MESSAGE}</label>)
                    }
                    <input type="password" name="password" id="password" className={"input"} onChange={onPasswordChange}/>
                    <label htmlFor="password">Password</label>
                    <Button variant={"contained"} color={"primary"} type="submit" className={"submit_btn"}>Log in</Button>
                </form>
            </section>
        </React.Fragment>
    )
}
export default Login;
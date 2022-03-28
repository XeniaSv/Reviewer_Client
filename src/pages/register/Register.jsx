import axios from "axios";
import {useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import "./stylesRegister";
import Button from "@mui/material/Button";
import useStyles from "../register/stylesRegister";
import TextField from "@mui/material/TextField";

function Register(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = async (e) => {
        e.preventDefault();
        await setEmail(emailRef.current.value);
        await setPassword(passwordRef.current.value);
        await setUsername(usernameRef.current.value);
        console.log(emailRef.current.value)
        try {
            await axios.post("/auth/register", {
                email: emailRef.current.value,
                username: usernameRef.current.value,
                password: passwordRef.current.value
            });
            history.push("/login");
        } catch (err) {
        }
    };

    return (
        <div>
            <div className={classes.wrapper}>
                <h2 className={classes.logo}>REVIEWER</h2>
                <Button className={classes.buttonLogIn}
                        onClick={() => history.push("/login")}>Log In</Button>
            </div>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h1 className={classes.header}>Sign up</h1>
                    <TextField
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        type="email"
                        id="outlined-basic"
                        label="Email address"
                        variant="outlined"
                        inputRef={emailRef}/>
                    <TextField
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        type="username"
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        inputRef={usernameRef}/>
                    <TextField
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        type="password"
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        inputRef={passwordRef}/>
                    <Button className={classes.button} onClick={handleStart}>
                        Start
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Register;
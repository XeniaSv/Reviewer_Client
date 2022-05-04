import {useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import "./stylesRegister";
import Button from "@mui/material/Button";
import useStyles from "../register/stylesRegister";
import TextField from "@mui/material/TextField";
import {register} from "../../../context/authContext/apiCalls";

function Register() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const history = useHistory();

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    );

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = async (e) => {
        e.preventDefault();
        await setEmail(emailRef.current.value);
        await setPassword(passwordRef.current.value);
        await setUsername(usernameRef.current.value);
        const registerRes = await register(emailRef.current.value, usernameRef.current.value, passwordRef.current.value);
        if (registerRes.status === 201) {
            history.push("/login");
            return;
        }
        alert(registerRes.data.message)
    };


    const handleFailureGoogle = (result) => {
        alert(result);
    };


    return (
        <div>
            <div className={classes.wrapper}>
                <h2 className={classes.logo}>REVIEWER</h2>
                <Button className={classes.buttonLogIn}
                        onClick={() => history.push("/login")}>Войти</Button>
            </div>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h1 className={classes.header}>Регистрация</h1>
                    <TextField
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        type="email"
                        id="outlined-basic"
                        label="Почта"
                        variant="outlined"
                        inputRef={emailRef}/>
                    <TextField
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        type="username"
                        id="outlined-basic"
                        label="Имя"
                        variant="outlined"
                        inputRef={usernameRef}/>
                    <TextField
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        type="password"
                        id="outlined-basic"
                        label="Пароль"
                        variant="outlined"
                        inputRef={passwordRef}/>
                    <Button className={classes.button} onClick={handleStart}>
                        Начать
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default Register;
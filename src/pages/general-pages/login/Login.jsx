import {useContext, useState} from "react";
import {login} from "../../../context/authContext/apiCalls";
import {AuthContext} from "../../../context/authContext/AuthContext";
import useStyles from './stylesLogin';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function Login() {
    const classes = useStyles();

    const [loginData, setLoginData] = useState({});
    const {dispatch} = useContext(AuthContext);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value !== "")
            setLoginData({...loginData, [e.target.name]: value});
        else {
            delete loginData[e.target.name];
            setLoginData({...loginData});
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginRes = await login(loginData, dispatch);
        if (loginRes.status !== 200) {
            alert(loginRes.data.message)
        }
    };

    return (
        <div className={classes.login}>
            <div>
                <div className={classes.wrapper}>
                    <h2 className={classes.logo}>REVIEWER</h2>
                </div>
            </div>
            <div className={classes.container}>
                <form className={classes.form}>
                    <h1 className={classes.header}>Войти</h1>
                    <TextField
                        onChange={handleChange}
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        name="email"
                        id="outlined-basic"
                        label="Почта"
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange}
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        id="outlined-password-input"
                        label="Пароль"
                        name="password"
                        autoComplete="current-password"
                    />
                    <Button
                        disabled={Object.keys(loginData).length !== 2}
                        className={classes.button}
                        onClick={handleLogin}
                    >
                        Войти
                    </Button>
                    <span>
             Нет аккаунта в Reviewer? <Link to={'/register'}>
                        <b>Зарегистрируйся сейчас.</b>
                    </Link>
          </span>
                </form>
            </div>
        </div>
    );
}

export default Login;
import {useState} from "react";
import {useHistory} from "react-router-dom";
import "./stylesRegister";
import Button from "@mui/material/Button";
import useStyles from "../register/stylesRegister";
import TextField from "@mui/material/TextField";
import {register} from "../../../context/authContext/apiCalls";

function Register() {
    const classes = useStyles();
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        const value = e.target.value;
        if (value !== "")
            setRegisterData({...registerData, [e.target.name]: value});
        else {
            delete registerData[e.target.name];
            setRegisterData({...registerData});
        }
    };

    const handleStart = async (e) => {
        e.preventDefault();
        const registerRes = await register(registerData);
        if (registerRes.status === 201) {
            history.push("/login");
            return;
        }
        alert(registerRes.data.message)
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
                        onChange={handleChange}
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        name="email"
                        id="outlined-basic"
                        label="Почта"
                        variant="outlined"/>
                    <TextField
                        onChange={handleChange}
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        name="username"
                        id="outlined-basic"
                        label="Имя"
                        variant="outlined"/>
                    <TextField
                        onChange={handleChange}
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        name="password"
                        id="outlined-basic"
                        label="Пароль"
                        variant="outlined"/>
                    <Button
                        className={classes.button}
                        onClick={handleStart}
                        disabled={Object.keys(registerData).length !== 3}
                    >
                        Зарегестрироваться
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Register;
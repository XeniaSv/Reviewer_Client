import {useContext, useState} from "react";
import {login} from "../../context/authContext/apiCalls";
import {AuthContext} from "../../context/authContext/AuthContext";
import useStyles from './stylesLogin';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

function Login(props) {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {dispatch} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        login({email, password}, dispatch)
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
                    <h1 className={classes.header}>Log In</h1>
                    <TextField
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        type="email"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}/>
                    <TextField
                        sx={{input: {color: 'white'}}}
                        className={classes.input}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className={classes.button} onClick={handleLogin}>Sign In</Button>
                    <span>
            New to Reviewer? <b>Sign up now.</b>
          </span>
                </form>
            </div>
        </div>
    );
}

export default Login;
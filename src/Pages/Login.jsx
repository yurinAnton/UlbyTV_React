import React, { useContext } from "react";
import MyButton from "../components/UI/Button/Mybutton";
import MyInput from './../components/UI/Input/MyInput';
import { AuthContext } from './../Context/context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const Login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');

    }

    return (
        <div>
            <h1>Page for Login</h1>
            <form onSubmit={Login}>
                <MyInput type="text" placeholder="Enter your Login"/>
                <MyInput type="password" placeholder="Enter your Password"/>
                <MyButton> Enter </MyButton>
            </form>
        </div>
    )
}

export default Login;
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import MyButton from "../Button/Mybutton";
import { AuthContext } from './../../../Context/context';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Exit
            </MyButton>
        <div className="navbar_links">
          <Link to="/about"> About site </Link>
          <Link to="/posts"> Posts </Link>
        </div> 
    </div>
    )
}

export default Navbar;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../Providers/AuthProviders';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navOption = <>

        <li> <Link><a>Home</a></Link> </li>

        <li> <Link><a>About</a></Link> </li>

        <li> <Link><a>Services</a></Link> </li>

        <li> <Link><a>Blog</a></Link> </li>

        <li> <Link><a>Contact</a></Link> </li>


        {user?.email ? 
        <>
        <li> <Link to="/data"><a>Data</a></Link> </li>
        <button onClick={handleLogOut}> <li><a>Log Out</a></li></button>
        </>
        : 
        <li> <Link to="/login"><a>Log In</a></Link> </li>
        
         }

        
    </>

    return (
        <div>
            <div className="navbar bg-base-100 font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navOption}

                        </ul>
                    </div>
                    <a>
                        <img className='w-20' src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
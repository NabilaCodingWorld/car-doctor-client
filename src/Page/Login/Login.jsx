import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)

            navigate(from, { replace: true })
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='my-20'>
            <div className="w-1/3 mx-auto mt-10 p-4 bg-white rounded shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <form onSubmit={handleLogUp}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded shadow appearance-none"
                            type="text"
                            id="email"
                            name="email"
                           
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded shadow appearance-none"
                            type="password"
                            id="password"
                            name="password"
                            
                        />
                    </div>
                    <div className="text-center">

                            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Login" />
                       
                    </div>
                </form>
            </div>

        <h1 className='text-center mt-10'>Go To  <Link className='text-blue-700' to="/signup"> registration </Link> Page </h1>

        </div>
    );
};

export default Login;
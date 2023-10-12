import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const SubmitData = () => {

    const {user} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const name = form.name.value;
        const home = form.home.value;

        const submit = {email, name, home}

        fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submit) 
        })
        .then(res => res.json())
        .then(data =>{
            console.log('Inside post res', data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='my-20'>
            <div className="w-1/3 mx-auto mt-10 p-4 bg-white rounded shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded shadow appearance-none"
                            type="text"
                            id="email"
                            name="email"
                            defaultValue={user?.email}

                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Name:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded shadow appearance-none"
                            type="text"
                            id="name"
                            name="name"

                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Home:
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded shadow appearance-none"
                            type="text"
                            id="home"
                            name="home"
                           

                        />
                    </div>


                    <div className="text-center">

                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Login" />

                    </div>
                </form>
            </div>

       

        </div>
    );
};

export default SubmitData;
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // get form data
        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 5) {
            setError({ ...error, name: 'must be more than 5 character long' });
            return;
        }
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(error => alert(error))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            })

    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none my-6">
                <h2 className="text-2xl font-semibold text-center pt-6">Register Your Account</h2>

                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name"
                            type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    {
                        error.name && <label className="label text-sm text-red-500">
                            {error.name}
                        </label>
                    }

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo"
                            type="text" placeholder="photo url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email"
                            type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password"
                            type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>

                <p className="text-center font-semibold">
                    Already Have An Account ?
                    <Link
                        className="hover:underline text-red-500"
                        to='/auth/register'> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
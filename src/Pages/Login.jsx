import { Link } from "react-router";
import NavBar from "../Components/NavBar";
import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signInUser, user } = use(AuthContext);
  console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="hero bg-[url('https://i.ibb.co/fGSHxdJk/markus-spiske-6pfl-Ee-Sz-GUo-unsplash.jpg')] bg-cover bg-center min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100/80 backdrop-blur-md shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset w-80">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                  />

                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      className="input"
                      name="password"
                      placeholder="Password"
                    />
                    <span
                      onClick={() => setShow(!show)}
                      className="absolute top-4 right-4 cursor-pointer z-50"
                    >
                      {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </span>
                  </div>

                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  <button className="btn btn-neutral mt-4">Login</button>
                  <p>
                    Don't have an account? Please{" "}
                    <Link
                      className="text-blue-400 hover:text-blue-600"
                      to={"/register"}
                    >
                      Register
                    </Link>{" "}
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

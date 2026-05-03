import { Link } from "react-router";
import NavBar from "../Components/NavBar";

const Login = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="hero bg-[url('https://i.ibb.co/fGSHxdJk/markus-spiske-6pfl-Ee-Sz-GUo-unsplash.jpg')] bg-cover bg-center min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100/80 backdrop-blur-md shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <form>
                <fieldset className="fieldset w-80">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />

                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />

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

import { Link } from "react-router";
import NavBar from "../Components/NavBar";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    // console.log(name, email, photoURL, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // updateUser({ displayName: name, photoURL: photoURL })
        //   .then(() => {
        //     setUser({ ...user, displayName: name, photoURL: photoURL });
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     setUser(user);
        //   });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="hero bg-[url('https://i.ibb.co/fGSHxdJk/markus-spiske-6pfl-Ee-Sz-GUo-unsplash.jpg')] bg-cover bg-center min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100/80 backdrop-blur-md shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Register!</h1>
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset w-80">
                  {/* Name  */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="Your Name"
                  />
                  {/* photo  */}
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="input"
                    name="photo"
                    placeholder="Photo URL"
                  />
                  {/* email  */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email"
                  />
                  {/* password  */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                  <p>
                    Already have an account? Please{" "}
                    <Link
                      className="text-blue-400 hover:text-blue-600"
                      to={"/login"}
                    >
                      Login
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

export default Register;

import { Link, useParams } from "react-router";
import useToyData from "../Hooks/useToyData";
import { toast } from "react-toastify";

const ToyDetails = () => {
  const { id } = useParams();
  const { toys } = useToyData();
  const toy = toys.find((t) => String(t.toyId) === id);
  const {
    toyId,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = toy || {};

  const handleTryNow = (e) => {
    e.preventDefault();
    toast.success("We will contact you soon! 🚀", {
      position: "top-right",
    });
    e.target.reset();
  };
  return (
    <div className="bg-[#e6fffa] min-h-screen grid">
      <div className="card card-side bg-base-100 shadow-2xl">
        <figure className="h-86">
          <img src={pictureURL} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto shadow-2xl m-10 bg-[#e6fffa] rounded-lg">
        <div className="card-body bg-[#e6fffa] flex-1 rounded-xl">
          <form onSubmit={handleTryNow} className="flex flex-col h-full">
            <fieldset className="fieldset w-full flex-1">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your Name"
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
            </fieldset>
            <div className="mt-2">
              <button className="btn btn-outline bg-[#99ddff] flex mx-auto">
                Try Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mb-5">
        <Link
          to={"/"}
          className="bg-[#99ddff] text-black btn btn-primary mt-10 font-bold flex items-center w-fit mx-auto"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ToyDetails;

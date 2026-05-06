import { Link, useParams } from "react-router";
import useToyData from "../Hooks/useToyData";
import { toast } from "react-toastify";
import ratingIMG from "../assets/icon-ratings.png";

const ToyDetails = () => {
  const { id } = useParams();
  const { toys } = useToyData();
  const toy = toys.find((t) => String(t.toyId) === id);
  const {
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
      <div className="shadow-2xl m-4 rounded-t-2xl rounded-b-xl">
        <div>
          <img
            className="w-full h-80 object-cover overflow-hidden rounded-2xl"
            src={pictureURL}
            alt=""
          />
        </div>
        <div className="mx-2 md:mx-5 m-5">
          <h1 className="text-3xl font-bold">{toyName}</h1>
          <h2 className="text-xl font-bold">
            Category: <span className="text-black/50">{subCategory}</span>
          </h2>
          <p className="text-black/40 font-semibold mt-2">{description}</p>
          <h2 className="text-xl font-bold mt-2">Price: {price}$</h2>
          <h2 className="mt-4">Contact with Seller</h2>
          <div className="border w-2/12 border-black/20"></div>
          <h1 className="text-[16px] font-semibold text-black/30">
            Name: {sellerName}
          </h1>
          <h1 className="text-[16px] font-semibold text-black/30">
            Email: {sellerEmail}
          </h1>
        </div>
        <div className="flex flex-wrap justify-between  mx-10 mb-5">
          <div className="badge badge-outline text-blue-500 text-xl md:text-2xl md:p-4">
            {availableQuantity} available
          </div>

          <div className="badge badge-outline flex items-center gap-1 text-xs md:text-sm md:p-4">
            <img src={ratingIMG} className="h-3 md:h-6" alt="" />
            <p className="text-xl md:text-2xl ">{rating}</p>
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
          className="bg-[#ffffb3] text-black btn btn-primary mt-10 font-bold flex items-center w-fit mx-auto"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ToyDetails;

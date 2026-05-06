import { Link } from "react-router";
import rating from "../assets/icon-ratings.png";

const ToyCard = ({ toy }) => {
  const { toyId } = toy;
  return (
    <div className="card bg-emerald-50 shadow-xl mb-5">
      <figure className="p-3">
        <img
          src={toy.pictureURL}
          alt="Shoes"
          className="rounded-xl w-full h-52 object-cover"
        />
      </figure>
      <div className="px-2 pb-4">
        <h2 className="card-title text-2xl font-bold">{toy.toyName}</h2>
        <h3 className="text-xl font-semibold">Price: {toy.price}$</h3>
        <div className="card-actions flex justify-between my-2">
          <div className="badge badge-outline text-blue-500 font-semibold">
            {toy.availableQuantity} available
          </div>
          <div className="badge badge-outline flex items-center">
            <img src={rating} className="h-4" alt="" />
            <p>{toy.rating}</p>
          </div>
        </div>
        <div className="card-actions">
          <Link
            to={`/toy-details/${toyId}`}
            className="btn btn-primary bg-[#ffffb3] text-black mx-auto"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

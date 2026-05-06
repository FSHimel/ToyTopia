import { Link } from "react-router";
import rating from "../assets/icon-ratings.png";

const ToyCard = ({ toy }) => {
  const { toyId } = toy;
  return (
    <div className="card bg-emerald-50 shadow-xl my-3 mx-2 flex flex-col">
      <figure className="p-3">
        <img
          src={toy.pictureURL}
          alt="toy"
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      <div className="px-2 pb-4 flex flex-col flex-1">
        <div className="flex-1">
          <h2 className="card-title text-xl md:text-2xl font-bold">
            {toy.toyName}
          </h2>
          <h3 className="text-[16px] md:text-xl font-semibold">
            Price: {toy.price}$
          </h3>

          <div className="flex justify-between my-2">
            <div className="badge badge-outline text-blue-500 font-semibold">
              {toy.availableQuantity} available
            </div>

            <div className="badge badge-outline flex items-center gap-1">
              <img src={rating} className="h-4" alt="" />
              <p>{toy.rating}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            to={`/toy-details/${toyId}`}
            className="btn btn-primary bg-[#ffffb3] text-black w-full"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

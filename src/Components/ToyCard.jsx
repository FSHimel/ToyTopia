import { Link } from "react-router";
import rating from "../assets/icon-ratings.png";

const ToyCard = ({ toy }) => {
  const { toyId } = toy;
  return (
    <div className="card bg-emerald-50 shadow-xl flex flex-col mt-3">
      <figure className="p-2 md:p-3">
        <img
          src={toy.pictureURL}
          alt="toy"
          className="rounded-xl w-full h-40 md:h-48 object-cover"
        />
      </figure>

      <div className="px-3 py-3 md:px-4 md:py-4 flex flex-col flex-1">
        <div className="flex-1">
          <h2 className="card-title text-lg md:text-2xl font-bold">
            {toy.toyName}
          </h2>

          <h3 className="text-sm md:text-xl font-semibold">
            Price: {toy.price}$
          </h3>

          <div className="flex flex-wrap justify-between gap-2 my-2">
            <div className="badge badge-outline text-blue-500 text-xs md:text-sm">
              {toy.availableQuantity} available
            </div>

            <div className="badge badge-outline flex items-center gap-1 text-xs md:text-sm">
              <img src={rating} className="h-3 md:h-4" alt="" />
              <p>{toy.rating}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            to={`/toy-details/${toyId}`}
            className="btn btn-primary bg-[#ffffb3] text-black w-full text-sm md:text-base"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

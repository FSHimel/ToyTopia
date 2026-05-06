import { Link } from "react-router";
import Hero from "../Components/Hero";
import ToyCard from "../Components/ToyCard";
import useToyData from "../Hooks/useToyData";

const Home = () => {
  const { toys } = useToyData();
  const popularToys = toys.slice(0, 6);
  return (
    <div>
      <Hero></Hero>
      <div className="px-4 md:px-8 lg:px-12">
        <div className="text-center mt-20 flex justify-between">
          <h1 className="text-5xl font-bold">
            Popular Toys{" "}
            <span className="text-2xl font-semibold">
              (<span>{popularToys.length}</span>)
            </span>
          </h1>

          <div></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  space-x-4 space-y-8 my-6">
          {popularToys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
        <Link
          to={"/all-toys"}
          className="bg-[#99ddff] text-black btn btn-primary  font-bold flex items-center w-fit mx-auto"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;

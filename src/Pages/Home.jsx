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
          <h1 className="text-3xl md:text-5xl font-bold">
            Popular Toys{" "}
            <span className="text-xl md:text-2xl font-semibold">
              (<span>{popularToys.length}</span>)
            </span>
          </h1>

          <div></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-2 md:gap-6 items-stretch">
          {popularToys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
        <Link
          to={"/all-toys"}
          className="bg-[#99ddff] text-black btn btn-primary mt-10 font-bold flex items-center w-fit mx-auto"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;

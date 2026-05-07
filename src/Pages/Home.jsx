import { Link } from "react-router";
import Hero from "../Components/Hero";
import ToyCard from "../Components/ToyCard";
import useToyData from "../Hooks/useToyData";
import NewArrivalSllider from "../Components/NewArrivalSllider";

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
      <div className="grid md:grid-cols-2">
        <div className="grid grid-cols-3 gap-5 m-5 md:m-10 shadow-2xl bg-cyan-50">
          <div className="col-span-2">
            <NewArrivalSllider></NewArrivalSllider>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">New Arrival</h1>
          </div>
        </div>
        <div className="m-5 md:m-10 shadow-2xl p-5 bg-amber-50 rounded-xl">
          <h1 className="text-3xl font-bold">About Us</h1>
          <div className="border border-dotted border-black/30 w-5/12"></div>
          <div className="mt-5">
            <p className="text-black/50 font-bold">
              Welcome to ToyTopia — a place where imagination comes to life! We
              offer fun, educational, and high-quality toys for children of all
              ages. From action figures to puzzles and learning toys, we bring
              joy to every child’s playtime.
            </p>
            <h1 className="text-xl font-bold mt-5">Our Mission is:-</h1>
            <ul className="list-disc ml-10">
              <li>Making children happy</li>
              <li>Encouraging creativity</li>
              <li>Supporting learning through play</li>
              <li>Providing safe and quality toys</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

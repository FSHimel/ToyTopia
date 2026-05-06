import ToyCard from "../Components/ToyCard";
import useToyData from "../Hooks/useToyData";

const AllToys = () => {
  const { toys } = useToyData();
  return (
    <div className="px-2 md:px-4 lg:px-8">
      <div className="text-center mt-20 flex justify-between">
        <h1 className="text-3xl md:text-5xl font-bold">
          Popular Toys{" "}
          <span className="text-xl md:text-2xl font-semibold">
            (<span>{toys.length}</span>)
          </span>
        </h1>

        <div></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 items-stretch">
        {toys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;

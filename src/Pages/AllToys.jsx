import ToyCard from "../Components/ToyCard";
import useToyData from "../Hooks/useToyData";

const AllToys = () => {
  const { toys } = useToyData();
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="text-center mt-20 flex justify-between">
        <h1 className="text-5xl font-bold">
          Popular Toys{" "}
          <span className="text-2xl font-semibold">
            (<span>{toys.length}</span>)
          </span>
        </h1>

        <div></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  space-x-4 space-y-8 my-6">
        {toys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;

import Slider from "./Slider";

const Categories = () => {
  return (
    <section className="bg-dark-gray mt-20 pt-10" aria-label="Categories">
      <div className="max-w-330 mx-auto ">
        <div className="flex flex-row justify-between mr-2 items-end mb-8">
          <h2 className="md:uppercase text-white font-semibold md:text-[74px] font-rubik">
            Categories
          </h2>
          {/* slide buttons */}
          <div className="font-rubik flex gap-2">
            <button className="bg-white px-3 py-2 rounded-[8px] font-semibold">
              {"<"}
            </button>
            <button className="bg-white px-3 py-2 rounded-[8px] font-semibold">
              {">"}
            </button>
          </div>
        </div>

        <Slider />

      </div>
    </section>
  );
};

export default Categories;

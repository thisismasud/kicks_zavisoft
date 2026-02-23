import ProductCard from "@/components/Products/ProductCard";
import { getProducts } from "@/lib/data/products";
import Link from "next/link";

const NewDrops = async () => {
  const datas = await getProducts();

  return (
    <section aria-label="New Drops Products" className="mt-5 md:mt-20 max-w-330 mx-auto ">
      <div className="flex justify-between items-end gap-4">
        <h2 className="text-[24px] md:text-[74px] font-semibold font-rubik leading-7 lg:leading-20 text-dark-gray lowercase lg:uppercase">
          Don't miss out
          <br /> new drops
        </h2>
        <Link
          href="/products"
          className="bg-primary text-white px-6 py-2 rounded-[5px] font-rubik text-[14px] cursor-pointer whitespace-nowrap"
        >
          SHOP NEW DROPS
        </Link>
      </div>

      <div className="flex flex-wrap mt-5 md:mt-10 gap-y-4">
        {datas?.length > 0 ? (
          datas.map((product) => (
            <div key={product.id} className="w-1/2 lg:w-1/4 md:p-2 p-1">
              <ProductCard
                imageSrc={product.images[0]}
                alt={product.title}
                price={product.price}
                title={product.title}
                tag="New"
                slug={product.slug}
              />
            </div>
          ))
        ) : (
          <div className="py-4 px-2 text-gray-500 font-semibold">No products found.</div>
        )}
      </div>
    </section>
  );
};

export default NewDrops;

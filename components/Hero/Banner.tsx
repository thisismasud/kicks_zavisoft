import Image from "next/image";
import Label from "./Label";
import BannerThumbnail from "./BannerThumbnail";

const images = [
    { id: 1, source: "/products/banner-thumb-1.jpg" },
    { id: 2, source: "/products/banner-thumb-2.jpg" }
];

const Banner = () => {
  return (
    <figure className="relative">
      {/* Main Image Container */}
      <div className="banner-image w-full h-[382px] lg:h-[750px] relative">
        <Image
          src="/products/banner.jpg"
          alt="Nike Air Max"
          fill
          priority
          className="object-cover rounded-3xl lg:rounded-[64px]"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10 rounded-3xl lg:rounded-[64px]" aria-hidden="true" />


        {/* Banner text */}
      <figcaption className="absolute left-5 md:left-10 bottom-5 md:bottom-10 text-white z-20">
        <h2 className="text-3xl lg:text-5xl font-semibold font-rubik text-[24px] md:text-[45px] lg:text-[74px]">
          NIKE AIR MAX
        </h2>

        <p className="text-[14px] md:text-[18px] lg:text-[24px]">
          Nike introducing the new air
          <br className="lg:hidden" />
          max for
          <br className="hidden lg:block" />
          everyone's comfort
        </p>

        <button 
          type="button"
          className="bg-primary text-white px-6 py-2 rounded-[8px] mt-2 p-10 font-rubik text-[14px] cursor-pointer"
        >
          SHOW NOW
        </button>
      </figcaption>

      <Label />

      {/* Thumbnail Images  */}
      <div 
        role="group" 
        aria-label="Product image gallery" 
        className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 z-30 flex flex-col gap-2 lg:gap-4"
      >
        {images.map((image) => (
          <BannerThumbnail key={image.id} thumbnailSource={image.source} />
        ))}
      </div>
    </figure>
  );
};

export default Banner;
import Image from "next/image";

const BannerThumbnail = ({ thumbnailSource }: { thumbnailSource: string }) => {
  return (
    <div 
      className="relative w-[64px] h-[64px] md:w-[100px] md:h-[100px] lg:w-[160px] lg:h-[160px] overflow-hidden border-[1px] md:border-[3px] rounded-[8px] md:rounded-[16px] lg:rounded-[32px] border-white"
      role="img"
      aria-label="Product preview thumbnail"
    >
      <Image
        src={thumbnailSource}
        alt="View of Nike Air Max product details"
        fill
        sizes="(max-width: 768px) 64px, (max-width: 1024px) 100px, 160px"
        className="object-cover"
      />
    </div>
  );
};

export default BannerThumbnail;
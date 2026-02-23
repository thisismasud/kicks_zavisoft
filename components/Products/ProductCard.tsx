import Image from "next/image";
import Link from "next/link";
import Tag from "../Products/Tag";

const ProductCard = ({ imageSrc, alt, price, title, tag, slug }: { imageSrc: string, alt: string, price: number, title: string, tag?: string, slug?: string }) => {
  const slugValue = slug || title.toLowerCase().replace(/\s+/g, "-");

  return (
    <article 
      itemScope 
      itemType="https://schema.org/Product" 
      className="group flex flex-col rounded-[24px]"
    >
      {/* for SEO */}
      <meta itemProp="brand" content="Adidas" />
      <meta itemProp="description" content={`${title} - High performance running shoes.`} />

      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-[16px] md:rounded-[24px] bg-white ">
        <Image 
          itemProp="image"
          src={imageSrc} 
          alt={alt} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-2 rounded-[24px]" 
        />

        {tag && <Tag text={tag} />}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2 mt-2">
        <h3 
          itemProp="name" 
          className="font-rubik text-[16px] md:text-[24px] font-semibold text-dark-gray uppercase pl-1"
        >
          {title}
        </h3>

        {/* Pricing Schema */}
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="price" content={price.toString()} />
          
          <Link 
            href={`/products/${slugValue}`}
            aria-label={`View details for ${title}`}
            className="flex items-center justify-center w-full bg-dark-gray py-2 md:py-3 rounded-[8px] text-white font-semibold uppercase tracking-widest transition-colors hover:bg-black outline-none focus-visible:ring-4 focus-visible:ring-blue-500 text-[12px] md:text-[14px]"
          >
            View Product - <span className="text-yellow">${price}</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
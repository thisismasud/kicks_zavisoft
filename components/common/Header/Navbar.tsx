import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
        
      <ul className="flex flex-col md:flex-row gap-7 md:gap-10 font-semibold text-[16px] text-dark-gray">
        <li>
          <Link href="/new-drops">New Drops🔥 </Link>
        </li>
        <li className="flex  items-center">
          <Link href="/men">Men</Link>
          <span className="ml-1 inline-block w-0 h-0 border-solid border-t-[8.7px] border-r-[5px] border-l-[5px] border-b-0 border-l-transparent border-r-transparent border-t-dark-gray border-b-transparent"></span>
        </li>
        <li className="flex  items-center">
          <Link href="/women">Women</Link>
          <span className="ml-1 inline-block w-0 h-0 border-solid border-t-[8.7px] border-r-[5px] border-l-[5px] border-b-0 border-l-transparent border-r-transparent border-t-dark-gray border-b-transparent"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

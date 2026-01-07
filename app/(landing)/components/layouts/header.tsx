import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between gap-10 py-7">
        <Link href="#" aria-label="Go to homepage">
          <Image src="/images/logo.svg" alt="sporton logo" width={127} height={30} />
        </Link>

        <nav className="flex gap-24 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:absolute after:left-1/2 after:top-full after:mt-1 after:h-[3px] after:w-1/2 after:-translate-x-1/2 after:rounded-full after:bg-primary"
          >
            Home
          </Link>

          <Link href="#" className="transition hover:text-black/70">
            Category
          </Link>

          <Link href="#" className="transition hover:text-black/70">
            Explore Products
          </Link>
        </nav>

        <div className="flex items-center gap-10">
          <button
            type="button"
            aria-label="Search"
            className="transition hover:opacity-70"
          >
            <FiSearch size={24} />
          </button>

          <button
            type="button"
            aria-label="Shopping bag"
            className="relative transition hover:opacity-70"
          >
            <FiShoppingBag size={24} />

            <span className="absolute -top-1 -right-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-primary text-[10px] text-white">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

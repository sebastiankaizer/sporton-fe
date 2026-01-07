import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "product-2.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Shirt",
    price: 119000,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Running",
    price: 458000,
    imgUrl: "product-4.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Running",
    price: 458000,
    imgUrl: "product-5.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Shirt",
    price: 119000,
    imgUrl: "product-6.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Running",
    price: 458000,
    imgUrl: "product-4.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Running",
    price: 458000,
    imgUrl: "product-4.png",
  },
];

const ProductSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32">
      <h2 className="mb-11 text-center text-4xl font-bold italic">
        <span className="text-primary">OUR</span> PRODUCTS
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {productList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="bg-white p-1.5 transition hover:drop-shadow-xl"
          >
            <div className="relative flex aspect-square w-full items-center justify-center bg-primary-light">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />

              <Button className="absolute right-3 top-3 h-10 w-10 !p-2">
                <FiPlus size={24} />
              </Button>
            </div>

            <h3 className="mb-1.5 mt-4 text-lg font-medium">{product.name}</h3>

            <div className="mb-8 flex justify-between">
              <div className="text-gray-500">{product.category}</div>

              <div className="font-medium text-primary">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

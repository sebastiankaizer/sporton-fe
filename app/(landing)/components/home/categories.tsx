import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  { name: "Running", imgUrl: "category-running.png" },
  { name: "Tennis", imgUrl: "category-tennis.png" },
  { name: "Basketball", imgUrl: "category-basketball.png" },
  { name: "Football", imgUrl: "category-football.png" },
  { name: "Badminton", imgUrl: "category-badminton.png" },
  { name: "Swimming", imgUrl: "category-swimming.png" },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Browse By Categories</h2>

        <Link href="#" className="flex gap-2 font-medium text-primary">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-6 gap-12">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="flex aspect-square w-full justify-center rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7]"
          >
            <div className="self-center">
              <Image
                src={`/images/categories/${category.imgUrl}`}
                alt={category.name}
                width={86}
                height={86}
                className="mb-[10px]"
              />

              <div className="text-center text-xl font-medium text-primary">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

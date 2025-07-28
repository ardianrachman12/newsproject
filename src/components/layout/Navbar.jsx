import React from "react";

const Navbar = () => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <nav className="w-full bg-white border-y border-gray-800">
      <div className="mx-auto flex flex-wrap justify-center items-center gap-10 py-[13px]">
        {categories.map((category) => (
          <a
            key={category}
            href={`#${category}`}
            className="font-medium text-black text-lg leading-[18px]"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import healthImg from "../../../src/assets/images/category-health.png";
import techImg from "../../../src/assets/images/category-technology.png";
import sportImg from "../../../src/assets/images/category-sport.png";
import worldImg from "../../../src/assets/images/category-worldnews.png";

const CategoryNews = () => {
  const categories = [
    {
      name: "Health",
      id: "health",
      img: healthImg,
      description: "Latest updates on health and wellness.",
    },
    {
      name: "Technology",
      id: "technology",
      img: techImg,
      description: "Latest updates on technology and innovation.",
    },
    {
      name: "Sports",
      id: "sports",
      img: sportImg,
      description: "Latest updates on sports and athletics.",
    },
    {
      name: "World News",
      id: "world-news",
      img: worldImg,
      description: "Latest updates on world news and global events.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <div key={category.id} className="flex gap-x-[10px] items-center">
          <img src={category.img} alt={category.name} />
          <div className="flex flex-col gap-2">
            <h3 className="text-[15px] text-left font-semibold">{category.name}</h3>
            <p className="text-gray-400 text-xs text-left">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryNews;

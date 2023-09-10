import React, { useState, useEffect } from "react";
import HeroSlide from "../Hero/Hero";
import { articles } from "../../UI/constants/data";

const Carousel = React.memo(({ autoSlide, duration }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  //console.log(articles);
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === articles.length - 1 ? 0 : prevSlide + 1
      );
    }, duration);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {articles.map((article, index) => (
          <HeroSlide
            key={index}
            isActive={activeSlide === index} // Set isActive based on index
            category={article.category}
            author={article.author}
            date={article.datePosted.toLocaleString()} // Use the actual datePosted property
            header={article.headLine}
            content={article.minContent}
            image={article.thumbnail}
          />
        ))}
      </div>
    </div>
  );
});

export default Carousel;

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-light-body dark:bg-dark-body min-h-screen flex flex-col justify-between p-4">
      <div className="bg-cards-light rounded-lg p-8 ml-8 mt-8 mr-8 mb-8">
        <h1 className="text-3xl font-serif mb-4 text-center">
          About Our Tech Community
        </h1>
        <p className="text-lg mb-4 font-sans">
          Welcome to our thriving tech community! Our goal is to create a
          vibrant and inclusive space for tech enthusiasts, whether you're just
          starting your journey or you're a seasoned expert.
        </p>
        <p className="text-lg mb-4 font-sans">
          We believe in the power of knowledge sharing and collaboration. Here,
          you can connect with like-minded individuals who share your passion
          for technology. Whether you want to learn, mentor, or simply engage in
          meaningful discussions, you'll find your place in our community.
        </p>
        <p className="text-lg mb-4 font-sans">
          Our community is a hub for:
          <ul className="list-disc ml-6">
            <li>Learning new technologies and skills</li>
            <li>Sharing your knowledge and experience</li>
            <li>Networking and making new friends</li>
            <li>Exploring cutting-edge trends and innovations</li>
          </ul>
        </p>
        <p className="text-lg mb-8 font-sans">
          Whether you're here to seek help, offer guidance, or simply connect
          with tech enthusiasts from around the world, we're thrilled to have
          you as part of our community.
        </p>
        <div className="text-center mt-8 font-sans">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfahFvHiyZ-og2lY-GyJzTlNq5EW-ajR5mm7PFL4zM4XBolug/viewform"
            target="_blank"
            className="px-6 py-4 bg-hover-dark text-dark-text hover:bg-[#5b5be2] rounded-lg cursor-pointer transition-colors duration-300"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

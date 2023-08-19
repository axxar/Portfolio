import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { Link } from "react-router-dom";

const Titles = [
  "Full-Stack Developer",
  "Computer Programmer",
];

const Home = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1750 // every 1.75 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="text-center">
          <div className="mb-5">
            <h1 className="text-4xl lg:text-7xl text-blue-600 font-bold mb-4">
              Hi, I'm <span className="pf-marlet-display font-semibold">Akshar</span>!
            </h1>
            <h1 className="text-lg lg:text-4xl text-gray-300 mb-4">
              I'm a{" "}
              <TextTransition springConfig={presets.gentle} inline>
                {Titles[index % Titles.length]}
              </TextTransition>
            </h1>
          </div>
          <div className="mt-10">
            <Link
              to="/portfolio"
              className="bg-blue-600 text-gray-300 px-3 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-400 hover:text-gray-900 text-sm sm:text-lg transition duration-300 mx-3 mt-10"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-gray-300 px-3 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-400 hover:text-gray-900 text-sm sm:text-lg transition duration-300 mx-3 mt-5"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
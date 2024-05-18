import { Link } from "react-router-dom";
// import KrishnaVasudeva from "../../src/assets/krishna_vasudeva.jpg";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-950 flex flex-col justify-center items-center">
      {/* <img src={KrishnaVasudeva} alt="Krishna Vasudeva" className="w-full max-w-xl mb-8" /> */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-8">
          Coming Soon...
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Go to{" "}
          <Link to="/" className="underline">
            home
          </Link>
          {" "} or {" "}
          <Link to="/contact-us" className="underline">
            contact us
          </Link>
        </p>
      </div>
      {/* Add more content or components here */}
    </div>
  );
};

export default ComingSoon;

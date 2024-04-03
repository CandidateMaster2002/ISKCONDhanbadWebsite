
const DonateNavbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-950 dark:text-white fixed w-full top-0 z-50 shadow-md">
      <div className="container flex items-center justify-between py-4">
        {/* Logo or other navigation items */}
        {/* <div>
          <img
            src="src\assets\iskcon-dhanbad-image.jpg"
            alt="ISKCON Dhanbad"
            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl max-h-14"
          />
        </div> */}

        {/* Donate button */}
        <div className="hidden lg:block">
          <a href="#donate" className="px-4 py-2 bg-primary text-white rounded-md">
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DonateNavbar;

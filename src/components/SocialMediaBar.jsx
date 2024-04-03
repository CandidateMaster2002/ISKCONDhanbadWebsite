const SocialMediaBar = () => {
  return (
    <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 w-16 flex flex-col justify-center items-start bg-white shadow-md">
      <ul>
        <li>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <i className="fab fa-facebook-f mr-2"></i>
            <span className="hidden sm:inline">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-600 flex items-center"
          >
            <i className="fab fa-twitter mr-2"></i>
            <span className="hidden sm:inline">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-purple-600 hover:text-purple-800 flex items-center"
          >
            <i className="fab fa-instagram mr-2"></i>
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-blue-700 hover:text-blue-900 flex items-center"
          >
            <i className="fab fa-linkedin-in mr-2"></i>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 flex items-center"
          >
            <i className="fab fa-github mr-2"></i>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-red-600 hover:text-red-800 flex items-center"
          >
            <i className="fab fa-youtube mr-2"></i>
            <span className="hidden sm:inline">YouTube</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMediaBar;

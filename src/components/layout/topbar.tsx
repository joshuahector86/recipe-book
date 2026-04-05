import { topbarUrls } from "../../utils/urls";
import logo from "../../assets/recipe-book-logo.jpg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <Link
        to="/"
        className="flex items-center gap-2 transform hover:scale-120 transition-transform"
      >
        <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
        <h2 className="hover:text-accent-saffron">Recipe Book</h2>
      </Link>
      <div className="flex space-x-4">
        {topbarUrls.map((url) => (
          <Link
            key={url.name}
            to={url.path}
            className="hover:text-accent-saffron"
          >
            {url.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topbar;

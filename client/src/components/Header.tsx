import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-10 py-7 fixed top-0 left-0 w-full backdrop-blur-md">
      <h1 className="text-white text-3xl">APIFlux</h1>

      <div className="flex space-x-4">
        <Link
          to={"https://github.com/ronak-pal1/APIFlux"}
          target="_blank"
          className="flex items-center space-x-3 bg-light-dark text-slate-300 px-7 py-1 rounded-md"
        >
          <GitHub /> <p>Repository</p>
        </Link>
        <button className="bg-primary-b px-7 py-1 text-slate-300 rounded-md font-medium">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;

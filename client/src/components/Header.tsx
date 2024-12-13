import { GitHub } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ isFixed }: { isFixed: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const route = location.pathname.split("/")[1];

    if (route == "dashboard") setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [location]);
  return (
    <header
      className={`flex justify-between px-10 py-7 ${
        isFixed && "fixed top-0 left-0 w-full"
      } backdrop-blur-md`}
    >
      <Link to={"/"} className="text-white text-3xl">
        APIFlux
      </Link>

      <div className="flex space-x-4">
        <Link
          to={"https://github.com/ronak-pal1/APIFlux"}
          target="_blank"
          className="flex items-center space-x-3 bg-light-dark text-slate-300 px-7 py-1 rounded-md"
        >
          <GitHub /> <p>Repository</p>
        </Link>

        {!isLoggedIn && (
          <button
            onClick={() => navigate("/signin")}
            className="bg-primary-b px-7 py-1 text-slate-300 rounded-md font-medium"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

import { HistoryToggleOff, Leaderboard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Box = ({
  text,
  Icon,
  nav,
  isActivate,
}: {
  text: string;
  Icon: JSX.Element;
  nav: string;
  isActivate: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(nav)}
      className={`${
        isActivate && "bg-light-dark"
      } text-slate-200 text-lg font-light py-4 px-5 flex items-center space-x-3 cursor-pointer  `}
    >
      {Icon}
      <p>{text}</p>
    </div>
  );
};

export enum ROUTES {
  "SCHEDULE" = "schedule",
  "STATISTICS" = "statistics",
}

const Sidebar = ({ currentRoute }: { currentRoute: ROUTES }) => {
  return (
    <div className="border-r-[0.1px] border-r-slate-700 h-full flex flex-col justify-between">
      <div>
        <Box
          text="Schedule API"
          Icon={<HistoryToggleOff />}
          nav={"/dashboard/schedule"}
          isActivate={currentRoute == ROUTES.SCHEDULE}
        />
        <Box
          text="Statistics"
          Icon={<Leaderboard />}
          nav="/dashboard/statistics"
          isActivate={currentRoute == ROUTES.STATISTICS}
        />
      </div>

      <div className="mx-4 py-4">
        <button className="bg-light-dark py-1 w-full text-red-300 rounded-md font-medium">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

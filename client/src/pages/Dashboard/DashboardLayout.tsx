import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar, { ROUTES } from "../../components/Sidebar";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const location = useLocation();
  const [routeTab, setRouteTab] = useState<ROUTES>(ROUTES.SCHEDULE);

  useEffect(() => {
    if (!location) return;

    const route = location.pathname.split("/")[2];

    if (route && (route == ROUTES.SCHEDULE || route == ROUTES.STATISTICS))
      setRouteTab(route as ROUTES);
  }, [location]);

  return (
    <div className="h-screen flex flex-col flex-1">
      <div className="flex-[0.1]">
        <Header isFixed={false} />
      </div>

      <div className="flex-[0.9] h-full w-full overflow-hidden">
        <div className="w-full h-full flex flex-1">
          <div className="h-full flex-[0.2]">
            <Sidebar currentRoute={routeTab} />
          </div>
          <div className="flex-[0.8] h-full px-8 py-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

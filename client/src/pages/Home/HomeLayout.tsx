import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

// Component for home layout which does not include the sidebar
const HomeLayout = () => {
  return (
    <>
      <Header isFixed={true} />
      <Outlet />
    </>
  );
};

export default HomeLayout;

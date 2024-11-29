import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const HomeLayout = () => {
  return (
    <>
      <Header isFixed={true} />
      <Outlet />
    </>
  );
};

export default HomeLayout;

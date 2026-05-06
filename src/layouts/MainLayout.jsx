import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#e6fffa]">
      <NavBar></NavBar>
      <div className="min-h-screen mb-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const BaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <div className="flex-1 w-full max-w-6x1 px-6 py-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;

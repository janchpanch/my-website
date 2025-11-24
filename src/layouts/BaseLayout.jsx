import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const BaseLayout = () => {
  return (
    <main>
      {/* <Header /> */}
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default BaseLayout;

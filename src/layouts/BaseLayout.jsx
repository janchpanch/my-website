import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <main class="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;

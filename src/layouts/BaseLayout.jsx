import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;

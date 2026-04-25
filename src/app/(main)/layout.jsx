import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainPageLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Header />
      <Navbar />
      {children}
    </div>
  );
};

export default MainPageLayout;

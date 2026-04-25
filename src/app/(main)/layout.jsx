import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainPageLayout = ({ children }) => {
  return (
    <div className="container mx-auto space-y-5">
      <Header />
      <BreakingNews/>
      <Navbar />
      {children}
    </div>
  );
};

export default MainPageLayout;

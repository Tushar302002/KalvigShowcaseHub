import React from "react";
import TopWork from "../components/Home/TopWork";
import DesignShowcase from "../components/Home/DesignShowcase";
import Three3D_And_Development from "../components/Home/Three3D_And_Development";
import CaseStudies from "../components/Home/CaseStudies";
import SectionDivision_Version1 from "../components/SectionDivision/SectionDivision_Version1";
import SectionDivision_Version2 from "../components/SectionDivision/SectionDivision_Version2";

function Home() {
  return (
    <div>

      {/* WORK SECTION */}
      <TopWork />

      <SectionDivision_Version1 />

      {/* DESIGN SECTION */}
      <DesignShowcase />

      <SectionDivision_Version1 />

      {/* 3D VISUALS AND DEVELOPMENT SECTION */}
      <Three3D_And_Development />

      <SectionDivision_Version1 />

      {/* CASE STUDY SECTION */}
      <CaseStudies />

    </div>
  );
}

export default Home;

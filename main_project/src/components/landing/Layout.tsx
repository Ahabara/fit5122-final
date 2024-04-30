import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";
import React from "react";
import JourneyMap from "../../JourneyMap.tsx";

interface LayoutProps {
  children?: React.ReactNode;
  styling?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, styling }) => {
  return (
    <>
      <JourneyMap />
      <NavBar />
      <div className="bg-gradient-to-r from-violet-200 to-pink-200">
        {children}
      </div>
      <Footer styling={styling} />
    </>
  );
};

export default Layout;

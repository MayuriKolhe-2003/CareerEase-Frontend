import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* Ensure content starts below the fixed navbar */}
      <main className="pt-16">  
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;

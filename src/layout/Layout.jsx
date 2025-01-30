import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

import { Sidebar } from "../sidebar/sidebar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="flex">
      <div className="lg:w-[25.3%] w-full lg:flex min-h-screen fixed top-0 left-0 bottom-0 overflow-y-auto">
        <Sidebar />
      </div>
      <div
        className={`flex-1 fixed transition-all duration-300 ${
          location.pathname === "/"
            ? "left-[100%] lg:left-[25.3%]"
            : "left-0 lg:left-[25.3%]"
        } right-0`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

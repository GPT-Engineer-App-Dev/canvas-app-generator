import { Outlet } from "react-router-dom";
import { Package2 } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Package2 className="h-6 w-6" />
          <span className="text-xl font-bold">Canvas Drawing App</span>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
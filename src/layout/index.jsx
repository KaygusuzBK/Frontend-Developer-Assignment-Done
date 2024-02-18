import { Outlet } from "react-router-dom";
import "~/assets/css/style.css";

function MainLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MainLayout;

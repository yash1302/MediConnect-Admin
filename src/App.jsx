import { RouterProvider } from "react-router-dom";

import { adminRoutes, doctorRoutes, loginRoute } from "./routes";
import { useContext } from "react";
import { userContext } from "./context/UserContext";

const App = () => {
  const { role } = useContext(userContext);
  const auth = localStorage.getItem("accessToken");
  console.log(auth, "-------------------auth-------------------");
  return !auth ? (
    <RouterProvider router={loginRoute} />
  ) : role === "admin" ? (
    <RouterProvider router={adminRoutes} />
  ) : (
    <RouterProvider router={doctorRoutes} />
  );
};

export default App;

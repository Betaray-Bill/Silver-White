import { useRoutes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Orders from "@/Layout/Home/Orders";
import Sale from "@/Layout/Home/Sale";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
      // You can uncomment the nested route if needed
      children: [
        {
          path: "",
          element: <Orders />,
        },
        {
            path: "sales",
            element: <Sale />,
        },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;

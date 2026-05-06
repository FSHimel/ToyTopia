import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import PrivetRout from "./PrivetRout";
import MyProfile from "../Pages/MyProfile";
import ToyDetails from "../Pages/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "my-profile",
        element: (
          <PrivetRout>
            {" "}
            <MyProfile></MyProfile>{" "}
          </PrivetRout>
        ),
      },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
  {
    path: `toy-details/:id`,
    element: (
      <PrivetRout>
        <ToyDetails></ToyDetails>
      </PrivetRout>
    ),
  },
]);

export default router;

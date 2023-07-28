import { RouteType } from "./Types";
import { Registration, Login } from "@/Pages/GeneralPages";

export const GeneralRoutes: RouteType[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
];

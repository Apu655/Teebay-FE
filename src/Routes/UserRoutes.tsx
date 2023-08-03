import { RouteType } from "./Types";
import { Profile } from "@/Pages/UserPages";

export const UserRoutes: RouteType[] = [
  {
    path: "/profile",
    element: <Profile />,
  },
];

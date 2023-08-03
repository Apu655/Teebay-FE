import { useRoutes } from "react-router-dom";
import { GeneralRoutes } from "./GeneralRoutes";
import { ProductRoutes } from "./ProductRoutes";
import { UserRoutes } from "./UserRoutes";

const AppRoutes = () => {
  return useRoutes([...GeneralRoutes, ...ProductRoutes, ...UserRoutes]);
};
export default AppRoutes;

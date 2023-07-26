import { useRoutes } from "react-router-dom";
import { GeneralRoutes } from "./GeneralRoutes";
import { ProductRoutes } from "./ProductRoutes";

const AppRoutes = () => {
  return useRoutes([...GeneralRoutes, ...ProductRoutes]);
};
export default AppRoutes;

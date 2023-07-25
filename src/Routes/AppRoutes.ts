import { useRoutes } from "react-router-dom";
import { GeneralRoutes } from "./GeneralRoutes";

const AppRoutes = () => {
  return useRoutes([...GeneralRoutes]);
};
export default AppRoutes;

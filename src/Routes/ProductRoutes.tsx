import { RouteType } from "./Types";
import { CreateProduct, MyProduct } from "@/Pages/ProductPages";

export const ProductRoutes: RouteType[] = [
  {
    path: "/myProduct",
    element: <MyProduct />,
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct />,
  },
];

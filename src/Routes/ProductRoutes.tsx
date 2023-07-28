import { RouteType } from "./Types";
import { CreateProduct, MyProduct, ProductView } from "@/Pages/ProductPages";

export const ProductRoutes: RouteType[] = [
  {
    path: "/myProduct",
    element: <MyProduct />,
  },
  {
    path: "myProduct/:id",
    element: <ProductView />,
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct />,
  },
];

import AllProduct from "@/Pages/ProductPages/AllProduct/AllProduct";
import { RouteType } from "./Types";
import {
  CreateProduct,
  MyProduct,
  ProductEdit,
  ProductView,
} from "@/Pages/ProductPages";

export const ProductRoutes: RouteType[] = [
  {
    path: "",
    element: <AllProduct />,
  },
  {
    path: ":id",
    element: <ProductView />,
  },
  {
    path: "/myProduct",
    element: <MyProduct />,
  },
  {
    path: "myProduct/:id",
    element: <ProductEdit />,
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct />,
  },
];

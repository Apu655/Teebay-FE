export interface RouteType {
  path: string;
  element: JSX.Element;
  // children?: {
  //   path: string;
  //   element: JSX.Element;
  // }[];
  children?: RouteType[];
}

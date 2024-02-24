import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SellPageLayout from "../components/layout/SellPageLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path:"/sell",
    element:<SellPageLayout />
  }
]);

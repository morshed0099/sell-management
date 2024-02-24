import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MainLayout from "../components/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path:"/sell",
    element:<MainLayout />
  }
]);

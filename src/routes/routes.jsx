import { createBrowserRouter } from "react-router-dom";
// import SingInPage from "../pages/auth/SingInPage";
import SignInPage from "../pages/auth/SignInPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardOverview from "../components/dashboardcomponent/DashboardOverview";

// import DashboardLayout from "../layouts/DashboardLayout";
// import DashboardOverview from "../pages/dashboard/DashboardOverview";
// import OrdersPage from "../pages/dashboard/OrdersPage";
// import ProductsPage from "../pages/dashboard/ProductsPage";
// import CustomersPage from "../pages/dashboard/CustomersPage";
// import DeliveryPage from "../pages/dashboard/DeliveryPage";
// import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
// import ReportsPage from "../pages/dashboard/ReportsPage";
// import SettingsPage from "../pages/dashboard/SettingsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      //   {
      //     path: "orders",
      //     element: <OrdersPage />,
      //   },
      //   {
      //     path: "products",
      //     element: <ProductsPage />,
      //   },
      //   {
      //     path: "customers",
      //     element: <CustomersPage />,
      //   },
      //   {
      //     path: "delivery",
      //     element: <DeliveryPage />,
      //   },
      //   {
      //     path: "analytics",
      //     element: <AnalyticsPage />,
      //   },
      //   {
      //     path: "reports",
      //     element: <ReportsPage />,
      //   },
      //   {
      //     path: "settings",
      //     element: <SettingsPage />,
      //   },
    ],
  },
]);

export default routes;

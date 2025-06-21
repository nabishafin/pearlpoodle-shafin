import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/auth/SignInPage";
import DashboardLayout from "../layouts/DashboardLayout";

// Main Pages
import DashboardOverview from "../components/dashboardcomponent/DashboardOverview";
import AllUsers from "../pages/dashboardpages/AllUsers";
import Products from "../pages/dashboardpages/Products";
import Earnings from "../pages/dashboardpages/Earnings";
import WithdrawRequest from "../pages/dashboardpages/WithdrawRequest";
import RefundRequest from "../pages/dashboardpages/RefundRequest";
import Category from "../pages/dashboardpages/Category";
import Report from "../pages/dashboardpages/Report";

// Settings Pages
import SettingsLayout from "../pages/dashboardpages/settings/SettingsLayout";
import PersonalInfo from "../pages/dashboardpages/settings/PersonalInfo";
import ChangePassword from "../pages/dashboardpages/settings/ChangePassword";

// Static Pages
import AboutUs from "../pages/dashboardpages/AboutUs";
import BuyerProtection from "../pages/dashboardpages/BuyerProtection";
import PrivacyPolicy from "../pages/dashboardpages/PrivacyPolicy";
import TermsConditions from "../pages/dashboardpages/TermsConditions";
import LogoutPage from "../pages/dashboardpages/LogoutPage";

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
      { index: true, element: <DashboardOverview /> },
      { path: "users", element: <AllUsers /> },
      { path: "products", element: <Products /> },
      { path: "earnings", element: <Earnings /> },
      { path: "withdraw", element: <WithdrawRequest /> },
      { path: "refund", element: <RefundRequest /> },
      { path: "category", element: <Category /> },
      { path: "report", element: <Report /> },

      // Settings nested routes
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          { path: "personal", element: <PersonalInfo /> },
          { path: "password", element: <ChangePassword /> },
        ],
      },

      // Static content pages
      { path: "about", element: <AboutUs /> },
      { path: "buyer-protection", element: <BuyerProtection /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "terms", element: <TermsConditions /> },
      { path: "logout", element: <LogoutPage /> },
    ],
  },
]);

export default routes;

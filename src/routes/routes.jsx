import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/auth/SignInPage";
import DashboardLayout from "../layouts/DashboardLayout";

// Main Pages
import DashboardOverview from "../pages/dashboardpages/DashboardOverview";
import AllUsers from "../pages/dashboardpages/AllUsers";
import Products from "../pages/dashboardpages/Products";
import Earnings from "../pages/dashboardpages/Earnings";
import WithdrawRequest from "../pages/dashboardpages/WithdrawRequest";
import RefundRequest from "../pages/dashboardpages/RefundRequest";
import Category from "../pages/dashboardpages/Category";
import Report from "../pages/dashboardpages/Report";
import LogoutPage from "../pages/dashboardpages/LogoutPage";

//Settings Pages
import AboutUs from "../pages/dashboardpages/AboutUs";
import BuyerProtection from "../pages/dashboardpages/BuyerProtection";
import PrivacyPolicy from "../pages/dashboardpages/PrivacyPolicy";
import TermsConditions from "../pages/dashboardpages/TermsConditions";
import PersonalInformation from "../pages/dashboardpages/PersonalInformation";
import ChangePassword from "../pages/dashboardpages/ChangePassword";

// Auth pages
import ForgotPassword from "../pages/auth/ForgotPassword";
import OTPVerification from "../pages/auth/OTPVerification";
import ResetPassword from "../pages/auth/ResetPassword";
import EditPersonalInformation from "../pages/dashboardpages/EditPersonalInformation";
import EditAbout from "../pages/dashboardpages/EditAbout";
import EditBuyerProtection from "../pages/dashboardpages/EditBuyerProtection";
import EditPrivacyPolicy from "../pages/dashboardpages/EditPrivacyPolicy";
import EditTerms from "../pages/dashboardpages/EditTerms";
import AllNotifications from "../pages/dashboardpages/AllNotifications";
import ReportDetailsPage from "../pages/dashboardpages/ReportDetailsPage";
import ReportedUsersDetails from "../pages/dashboardpages/ReportedUsersDetails";
import UserDetails from "../pages/dashboardpages/UserDetails";
import ProductDetails from "../pages/dashboardpages/ProductDetails";

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
    path: "/forgotpass",
    element: <ForgotPassword />,
  },
  {
    path: "/otpverification",
    element: <OTPVerification />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverview /> },
      { path: "notificatons", element: <AllNotifications /> },

      { path: "users", element: <AllUsers /> },
      { path: "usersdetails", element: <UserDetails /> },

      { path: "products", element: <Products /> },
      { path: "productsdetails", element: <ProductDetails /> },
      { path: "earnings", element: <Earnings /> },
      { path: "withdraw", element: <WithdrawRequest /> },
      { path: "refund", element: <RefundRequest /> },
      { path: "category", element: <Category /> },
      { path: "report", element: <Report /> },
      { path: "reportdetails", element: <ReportDetailsPage /> },
      { path: "reporteduserdetails", element: <ReportedUsersDetails /> },

      // Settings nested routes
      { path: "settings/personal", element: <PersonalInformation /> },
      { path: "settings/editpersonal", element: <EditPersonalInformation /> },

      { path: "settings/password", element: <ChangePassword /> },

      { path: "settings/about", element: <AboutUs /> },
      { path: "settings/editabout", element: <EditAbout /> },

      { path: "settings/buyer-protection", element: <BuyerProtection /> },
      {
        path: "/dashboard/settings/editprotection",
        element: <EditBuyerProtection />,
      },

      { path: "settings/privacy", element: <PrivacyPolicy /> },
      {
        path: "/dashboard/settings/editprivacy",
        element: <EditPrivacyPolicy />,
      },

      { path: "settings/terms", element: <TermsConditions /> },
      { path: "/dashboard/settings/editterms", element: <EditTerms /> },

      { path: "logout", element: <LogoutPage /> },
    ],
  },
]);

export default routes;

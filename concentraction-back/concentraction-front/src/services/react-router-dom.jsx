//React router dom import
import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import SignUp from "../pages/sign-up";
import ErrorPage  from "../pages/error-page.jsx";
import Backlog from "../pages/backlog.jsx";
import Dashboard from "../pages/dashboard.jsx";
import LogIn from "../pages/log-in.jsx";
import Pomodoro from "../pages/pomodoro.jsx";
import Styleguide from "../pages/styleguide.jsx";
import Sitemap from "../pages/sitemap.jsx";
import TermsAndConditions from "../pages/terms.jsx";


export const routerNav = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/backlog",
      element: <Backlog />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/log-in",
      element: <LogIn />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/pomodoro",
      element: <Pomodoro />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/styleguide",
      element: <Styleguide />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/sitemap",
      element: <Sitemap />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/terms-and-conditions",
      element: <TermsAndConditions />,
      errorElement: <ErrorPage />,
    }
  ]);
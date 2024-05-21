/** Router for the app
 * lazy load each page only when needed
 * Suspense displays a loading indicator until the page is loaded
 */
//React router dom import
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ProtectedRoutes from "../components/sign-up/protected-routes.jsx";

//reduces build size
const Sitemap = lazy(() => import("../pages/sitemap.jsx"));

const SignUp = lazy(() => import("../pages/sign-up.jsx"));

const Backlog = lazy(() => import("../pages/backlog.jsx"));

const ErrorPage = lazy(() => import("../pages/error-page.jsx"));

const Dashboard = lazy(() => import("../pages/dashboard.jsx"));

const LogIn = lazy(() => import("../pages/log-in.jsx"));

const Pomodoro = lazy(() => import("../pages/pomodoro.jsx"));

const Styleguide = lazy(() => import("../pages/styleguide.jsx"));

const TermsAndConditions = lazy(() => import("../pages/terms.jsx"));

export const routerNav = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/log-in",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LogIn />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/backlog",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Backlog />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/pomodoro",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Pomodoro />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/styleguide",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Styleguide />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/sitemap",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Sitemap />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/terms-and-conditions",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <TermsAndConditions />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

import AboutPage from "./assets/pages/AboutPage";
import Links from "./assets/layouts/Links";
import HomePage from "./assets/pages/HomePage";
import FactsPage from "./assets/pages/FactsPage";
import ErrorPage from "./assets/pages/ErrorPage"

const router = [
  //layout route
  {
    element: <Links />,
    path: "/",
    children: [
      //index route
      {
        element: <HomePage />,
        index: true,
      },
      //regular route
      {
        element: <AboutPage />,
        path: "about",
      },
    ],
  },
  //regular route/ parametrized
  {
    element: <FactsPage />,
    path: ":id",
  },
  //wildcard route
  {
    element: <ErrorPage/>,
    path: "*"
  }
];

export default router;

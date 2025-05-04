import AboutPage from "./assets/pages/AboutPage";
import MainPage from "./assets/pages/MainPage";
import Links from "./assets/layouts/Links";
import HomePage from "./assets/pages/HomePage";
import ParamPage from "./assets/pages/ParamPage";
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
        element: <MainPage />,
        path: "main",
      },
      {
        element: <AboutPage />,
        path: "about",
      },
    ],
  },
  //regular route/ parametrized
  {
    element: <ParamPage />,
    path: ":id",
  },
  //wildcard route
  {
    element: <ErrorPage/>,
    path: "*"
  }
];

export default router;

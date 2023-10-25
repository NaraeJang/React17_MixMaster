import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: "cocktail/:id",
        loader: singleCocktailLoader,
        errorElement: <SinglePageError />,
        element: <Cocktail />,
      },
      { path: "newsletter", element: <Newsletter />, action: newsletterAction },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

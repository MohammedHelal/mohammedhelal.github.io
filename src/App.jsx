import RootLayout from "./components/RootLayout.jsx";
import Home from "./pages/home/index.jsx";
import Portfolio from "./pages/portfolio/index.jsx";
import Projects from "./pages/portfolio/ProjectsList.jsx";
import Contact from "./pages/contact/Index.jsx";
import Project from "./pages/portfolio/Project.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Home /> },
            {
              path: "/portfolio",
              element: <Portfolio />,
              children: [
                { index: true, element: <Projects /> },
                { path: ":id", element: <Project /> },
              ],
            },
            { path: "/contact", element: <Contact /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

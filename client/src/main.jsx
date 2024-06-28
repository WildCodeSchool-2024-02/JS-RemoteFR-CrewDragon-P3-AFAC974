import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Artiste from "./pages/Artiste";
import Connexion from "./pages/Connexion";

import App from "./App";

function Main() {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Artiste",
          element: <Artiste />,
        },
        {
          path: "/Galerie",
          element: <Galerie />,
        },
        {
          path: "/Connexion",
          element: <Connexion />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

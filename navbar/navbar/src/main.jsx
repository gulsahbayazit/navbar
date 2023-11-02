import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Blog } from "./pages/Blog.jsx";
import { Services } from "./pages/Services.jsx";
import { Signup } from "./pages/Signup.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "blog", element: <Blog /> },
      { path: "services", element: <Services /> },
      { path: "sign-up", element: <Signup /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

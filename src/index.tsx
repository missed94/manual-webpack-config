import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "@/pages/About";
import { Shop } from "@/pages/Shop";
import App from "@/components/App/App";
import { Suspense } from "react";


const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <Suspense fallback={"...Loading"}><About /></Suspense>, //обертка над lazy component
      },
      {
        path: "/shop",
        element: <Suspense fallback={"...Loading"}><Shop /></Suspense>
      }
    ]
  }
])

container.render(<RouterProvider router={router} />);
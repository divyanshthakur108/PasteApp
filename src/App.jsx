// App.jsx

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";

// ROUTER
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
  },

  {
    path: "/pastes",
    element: (
      <div>
        <Nav />
        <Paste />
      </div>
    ),
  },

  {
    path: "/pastes/:id",
    element: (
      <div>
        <Nav />
        <ViewPaste />
      </div>
    ),
  },
]);

// APP COMPONENT
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

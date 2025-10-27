import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Changelog from "./pages/Changelog";
import About from "./pages/About";
import Contact from "./pages/Contact";

import BaseLayout from "./layouts/BaseLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

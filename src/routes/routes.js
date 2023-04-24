import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";
import PageNotFound from "../screens/pageNotFound";
import Task from "../screens/task";
import AddItems from "../screens/addItem";
import User from "../screens/user";
import Auth from "../screens/auth";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "/contact",
    element: <Contact />,
    name: "Contact",
  },
  {
    path: "/task",
    element: <Task />,
    name: "Task",
  },
  {
    path: "/additem",
    element: <AddItems />,
    name: "Add Item",
  },
  {
    path: "/user",
    element: <User />,
    name: "User",
  },
  {
    path: "/auth",
    element: <Auth />,
    name: "Auth",
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
];

import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";
import PageNotFound from "../screens/pageNotFound";
import Task from "../screens/task";
import AddItems from "../screens/addItem";

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
    path: "/404",
    element: <PageNotFound />,
  },
];

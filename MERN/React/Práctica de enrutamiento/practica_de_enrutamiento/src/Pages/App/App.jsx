import { useRoutes, BrowserRouter } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import Home from "../Home/Home.jsx";
import Number from "../Number/Number.jsx";
import Word from "../Word/Word.jsx";
import StyledWord from "../StyledWord/StyledWord.jsx";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/4",
      element: <Number />
    },
    {
      path: "/hello",
      element: <Word />
    },
    {
      path: "/hello/blue/red",
      element: <StyledWord />
    }
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
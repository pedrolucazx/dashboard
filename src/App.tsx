import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";

import { Home } from "./pages/home/Home";
import { List } from "./pages/list/List";
import { New } from "./pages/new/New";
import { Login } from "./pages/login/Login";
import { Single } from "./pages/single/Single";

import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={userInputs} title="Adicionar novo usuário" />
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={productInputs} title="Adicionar novo produto" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

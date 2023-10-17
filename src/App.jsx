import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { Layout } from "./pages/Layout";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { LoginPage } from "./pages/Login";
import PrivateWrapper from "./utills/PrivateRoutes";
import LoginWrapper from "./utills/LoginWrapper";

function App() {
  const [userStatus, setCount] = useState(true);
  
  return (
    <>
      <Layout isAuthenticated={userStatus}/>

      <h1>Hello</h1>
      <Routes>
        <Route element={<PrivateWrapper isAuthenticated={userStatus} />}>
          <Route path="/" element={<Home />} />
          <Route path="/books">
            <Route index element={<Books />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route>
        </Route>
        <Route element={<LoginWrapper isAuthenticated={userStatus} />}>
          <Route path="/login" element={<LoginPage  />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

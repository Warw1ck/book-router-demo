import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { Layout } from "./pages/Layout";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { LoginPage } from "./pages/Login";
import PrivateWrapper from "./utils/PrivateRoutes";
import LoginWrapper from "./utils/LoginWrapper";
import { AuthProvider } from "./context/AutContext";

function App() {

  return (
    <AuthProvider>
      <Layout />
      <Routes>
          <Route element={<PrivateWrapper/>}>
            <Route path="/" element={<Home />} />
            <Route path="/books">
              <Route index element={<Books />} />
              <Route path=":id" element={<Book />} />
              <Route path="new" element={<NewBook />} />
            </Route>
          </Route>
          <Route element={<LoginWrapper/>}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

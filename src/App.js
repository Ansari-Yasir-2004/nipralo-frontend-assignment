import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Pentakuhl from "./pages/Pentakuhl";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/nipralo-frontend-assignment">
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pentakuhl" element={<Pentakuhl />} />
          <Route path="/industries" element={<Industries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cartalog from "../../pages/CatalogPage/Catalog";
import SingleCartalog from "../../pages/SingleCartalog/SingleCartalog";
import Home from "../../pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import Resources from "../../pages/Resources/Resources";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Cartalog />} />
        <Route path="/catalog/:event" element={<SingleCartalog />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

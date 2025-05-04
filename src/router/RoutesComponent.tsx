import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout/Layout";

const LazyHomePage = lazy(() => (import("../pages/Home")))
const LazyProjectsPage = lazy(() => (import("../pages/Projects")))
const LazyCareerPathPage = lazy(() => (import("../pages/CareerPath")))

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="projects" element={<LazyProjectsPage />} />
        <Route path="path-to-it" element={<LazyCareerPathPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default RoutesComponent;
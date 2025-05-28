import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout/Layout";

const LazyHomePage = lazy(() => (import("../pages/HomePage")))
const LazyAboutPage = lazy(() => (import("../pages/AboutPage")))
const LazyProjectsPage = lazy(() => (import("../pages/ProjectsPage")))
const LazyProjectDetailPage = lazy(() => import("../pages/ProjectDetailsPage"));
const LazyCareerPathPage = lazy(() => (import("../pages/CareerPathPage")))

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="about" element={<LazyAboutPage />} />
        <Route path="projects" element={<LazyProjectsPage />} />
        <Route path="projects/:id" element={<LazyProjectDetailPage />} />
        <Route path="path-to-it" element={<LazyCareerPathPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default RoutesComponent;
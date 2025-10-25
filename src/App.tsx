import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ResumePage from "@/pages/resume";
// import BlogPage from "@/pages/blog";
import ProjectsPage from "@/pages/projects";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ResumePage />} path="/resumo" />
      <Route element={<ProjectsPage />} path="/projetos" />
    </Routes>
  );
}

export default App;

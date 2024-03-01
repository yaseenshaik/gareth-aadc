import "./reset.css";
import "./App.css";
import "animate.css";
import IndexPage from "./pages/index";
import Tutorial from "./pages/Tutorial";
import Host from "./pages/Host";
import Player from "./pages/Player";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/tutorial" element={<Tutorial />} />
    <Route path="/host" element={<Host />} />
    <Route path="/player" element={<Player />} />
  </Routes>
);

export default AppRoutes;

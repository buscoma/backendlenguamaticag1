import React from "react";
import Home from "./Containers/Home.js";
import LandingPage from "./Containers/LandingPage.js";
import RankingPage from "./Containers/RankingPage.js";
import MathGameOne from "./Containers/MathGameOne.js";

const routes = [
  { key: 1, public: true, name: "Home", path: "/", exact: true, main: () => <Home /> },
  { key: 2, public: false, name: "LandingPage", path: "/landing_page", exact: true, main: () => <LandingPage /> },
  { key: 3, public: false, name: "MathGameOne", path: "/math_game_one", exact: true, main: () => <MathGameOne /> },
  { key: 4, public: false, name: "RankingPage", path: "/ranking_page", exact: true, main: () => <RankingPage /> }
];

export default routes;
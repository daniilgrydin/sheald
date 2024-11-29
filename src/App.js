import React from "react";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import WorkerDetails from "./components/WorkerDetails";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js";

ChartJS.register(CategoryScale);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/worker/:fullName" element={<WorkerDetails />} />
    </Routes>
  );
};

export default App;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWorkers } from "../utils/api";
import "../styles/MainScreen.css";
import WorkerCard from "./WorkerCard";
import LoadingScreen from "./LoadingScreen";

const MainScreen = () => {
  const [workers, setWorkers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWorkers().then((data) => {
      const formattedWorkers = data.map((worker) => ({
        fullName: worker.name,
        riskLevel: worker.mostRecentEntry.risk,
        lastOnline: new Date(worker.mostRecentEntry.timestamp * 1000).toLocaleString(), // Convert timestamp to readable date
      }));
      formattedWorkers.sort((a, b) => b.riskLevel - a.riskLevel); // Sort by riskLevel in descending order
      setWorkers(formattedWorkers);
    });
  }, []);

  const getRiskColor = (riskLevel) => {
    const red = Math.min(255, (Math.sqrt(riskLevel)) * 255);
    const green = Math.min(255, (1 - (riskLevel*riskLevel)) * 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  if (workers.length === 0) {
    return <LoadingScreen />;
  }
  return (
    <div className="main-screen">
      {workers.length === 0 ? (
        <LoadingScreen />
      ) : (
        <div className="grid">
          {workers.map((worker) => (
            <WorkerCard
              key={worker.fullName}
              fullName={worker.fullName}
              riskLevel={worker.riskLevel}
              riskColor={getRiskColor(worker.riskLevel)}
              lastOnline={worker.lastOnline}
              onClick={() => navigate(`/worker/${encodeURIComponent(worker.fullName)}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainScreen;
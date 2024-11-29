import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWorkers, fetchWorkerDetails } from "../utils/api";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/MainScreen.css";
import WorkerCard from "./WorkerCard";
import LoadingScreen from "./LoadingScreen";

// Register necessary Chart.js components
ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const MainScreen = () => {
  const [workers, setWorkers] = useState([]);
  const [averageRiskData, setAverageRiskData] = useState([]);
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

    // Fetch risk data over time
    fetchWorkers().then((data) => {
      const workerNames = data.map((worker) => worker.name);
      const riskDataPromises = workerNames.map((name) => fetchWorkerDetails(name));
      Promise.all(riskDataPromises).then((allWorkersData) => {
        const riskData = {};
        allWorkersData.forEach((workerData) => {
          workerData.forEach((entry) => {
            const timestamp = new Date(entry.timestamp * 1000);
            const roundedTimestamp = new Date(Math.round(timestamp.getTime() / (5 * 60 * 1000)) * (5 * 60 * 1000)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            if (!riskData[roundedTimestamp]) {
              riskData[roundedTimestamp] = [];
            }
            riskData[roundedTimestamp].push(entry.risk);
          });
        });

        const averageRiskData = Object.keys(riskData).map((timestamp) => {
          const risks = riskData[timestamp];
          const averageRisk = risks.reduce((sum, risk) => sum + risk, 0) / risks.length;
          return { timestamp, averageRisk };
        });

        setAverageRiskData(averageRiskData);
      });
    });
  }, []);

  const getRiskColor = (riskLevel) => {
    const red = Math.min(255, (Math.sqrt(riskLevel)) * 255);
    const green = Math.min(255, (1 - (riskLevel * riskLevel)) * 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  if (workers.length === 0) {
    return <LoadingScreen />;
  }

  const chartData = {
    labels: averageRiskData.map((data) => data.timestamp),
    datasets: [
      {
        label: "Average Risk Over Time",
        data: averageRiskData.map((data) => data.averageRisk),
        borderColor: "#FF0000",
        pointBackgroundColor: "#FF0000",
        pointBorderColor: "#FFFFFF",
        borderWidth: 2,
        pointRadius: 4,
        fill: false,
      },
    ],
  };

  return (
    <div className="main-screen">
      <h2>All Employees</h2>
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
      <div className="average-risk-chart" style={{ paddingTop: "80px", height: "300px" }}>
        <h2>Average Risk Over Time</h2>
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "#F4F4F4",
                titleColor: "#000",
                bodyColor: "#000",
              },
            },
            scales: {
              x: { grid: { display: false } },
              y: { grid: { color: "#E0E0E0" } },
            },
          }}
        />
      </div>
    </div>
  );
};

export default MainScreen;
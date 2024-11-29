import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchWorkerDetails } from "../utils/api";
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
import "../styles/WorkerDetails.css";
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

const WorkerDetails = () => {
  const { fullName } = useParams();
  const navigate = useNavigate();
  const [workerData, setWorkerData] = useState([]);

  useEffect(() => {
    fetchWorkerDetails(fullName).then((details) => {
      setWorkerData(details);
    });
  }, [fullName]);

  const [showLoading, setShowLoading] = useState(true);
  if (!workerData) {
    return <LoadingScreen />;
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  const timestamps = workerData.map((data) => formatTimestamp(data.timestamp));

  const chartData = Object.keys(workerData[0] || {})
    .filter((key) => key !== "timestamp")
    .map((key) => ({
      key,
      data: workerData.map((data) => data[key]),
      chartData: {
        labels: timestamps,
        datasets: [
          {
            label: key.charAt(0).toUpperCase() + key.slice(1),
            data: workerData.map((data) => data[key]),
            borderColor: key === "risk" ? "#FF0000" : "#4285F4",
            pointBackgroundColor: key === "risk" ? "#FF0000" : "#4285F4",
            pointBorderColor: "#FFFFFF",
            borderWidth: 2,
            pointRadius: 4,
            fill: false,
          },
        ],
      },
    }));

  const isOnline = () => {
    if (workerData.length === 0) return false;
    const lastTimestamp = workerData[workerData.length - 1].timestamp;
    const tenMinutesAgo = Date.now() - 10 * 60 * 1000;
    return lastTimestamp*1000 >= tenMinutesAgo;
  };

  return (
    <div className="worker-details">
      <div className="profile-section">
        <div className="profile-picture">{fullName[0]}</div>
        <button className="close-button" onClick={() => navigate("/")}>
          ×
        </button>
      </div>
      <div className="name-and-position">
        <h1>{fullName}</h1>
      </div>
      <div className="status-module">{isOnline() ? "Online" : "Offline"}</div>
      {workerData.length && (
        <>
          {chartData.map(({ key, chartData }) => (
            <div key={key} className="temperature-chart">
              <h2>{key.charAt(0).toUpperCase() + key.slice(1)} Over Time</h2>
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
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
          ))}
        </>
      )}
    </div>
  );
};

export default WorkerDetails;
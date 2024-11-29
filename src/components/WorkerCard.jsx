import React from "react";
import PropTypes from "prop-types";
import "../styles/WorkerCard.css";

const WorkerCard = ({ fullName, riskLevel, riskColor, lastOnline, onClick }) => {
  return (
    <div className="worker-card" onClick={onClick}>
      <div className="worker-risk" style={{ color: riskColor }}>{(riskLevel * 100).toFixed(0)}%</div>
      <div className="worker-name">{fullName}</div>
      <div className="worker-last-online">Last Online:<br/>{lastOnline}</div>
    </div>
  );
};

WorkerCard.propTypes = {
  fullName: PropTypes.string.isRequired,
  riskLevel: PropTypes.number.isRequired,
  riskColor: PropTypes.string.isRequired,
  lastOnline: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WorkerCard;
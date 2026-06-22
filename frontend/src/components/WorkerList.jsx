import React from "react";
import "./WorkerList.css";

const WorkerList = ({ workers }) => {
  return (
    <div className="worker-list">
      <h2>Available Workers </h2>
      {workers.map((worker) => (
        <div className="worker-card" key={worker._id}>
          <div className="worker-top">
            <div className="avatar">{worker.name.charAt(0)}</div>

            <div className="worker-info">
              <div className="top-row">
                <div>
                  <div className="name">{worker.name}</div>
                  <div className="service">{worker.service}</div>
                </div>

                <div className="salary">₹{worker.monthlySalary}</div>
              </div>

              <div className="bottom-row">
                <span> {worker.phone}</span>
                <span>{(worker.distance / 1000).toFixed(2)} km</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkerList;

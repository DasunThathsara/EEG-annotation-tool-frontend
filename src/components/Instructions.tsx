import React from "react";

interface Props {
  onNext: () => void;
}

const Instructions: React.FC<Props> = ({ onNext }) => (
  <div className="instructions-container">
    <h1 className="instructions-title">EEG-Based Image Generation Experiment</h1>
    <p className="instructions-description">
      This research collects EEG data to generate images.
    </p>
    <p className="instructions-subtitle">Instructions:</p>
    <ul className="instructions-list">
      <li>Relax and close your eyes for 15 seconds when prompted.</li>
      <li>Images will be shown every 5 seconds.</li>
      <li>Stay still and focused during the experiment.</li>
    </ul>
    <button className="start-button" onClick={onNext}>
      Start Relaxation Phase
    </button>
  </div>
);

export default Instructions;

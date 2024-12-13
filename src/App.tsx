import React, { useState } from "react";
import UserForm from "./components/UserForm";
import Instructions from "./components/Instructions";
import Countdown from "./components/Countdown";
import ImageSlideshow from "./components/ImageSlideshow";
import { sendRequest } from "./api";
import { format } from "date-fns";

const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState<any>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const handleUserSubmit = (userData: any) => {
    setUser(userData);
    setStartTime(format(new Date(), "yyyy-MM-dd HH:mm:ss"));
    setStep(1);
  };

  const handleExperimentStart = () => {
    sendRequest("startrelaxing");
    setLogs((prev) => [...prev, "Relaxing started"]);
    setStep(2);
  };

  const handleExperimentBegin = () => {
    sendRequest("startexperiment");
    setLogs((prev) => [...prev, "Experiment started"]);
    setStep(3);
  };

  const handleExperimentComplete = () => {
    const endTime = new Date().toISOString();
    const logData = `
      Name: ${user.name}
      Age: ${user.age}
      Gender: ${user.gender}
      Start Time: ${startTime}
      End Time: ${endTime}
      Requests: ${logs.join(", ")}
    `;

    fetch("http://127.0.0.1:5000/save-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: user.name, content: logData }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Log file saved successfully");
        } else {
          console.error("Failed to save log file");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setStep(4);
  };

  const images = [
    "image0.jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
  ];

  return (
    <div>
      {step === 0 && <UserForm onSubmit={handleUserSubmit} />}
      {step === 1 && <Instructions onNext={handleExperimentStart} />}
      {step === 2 && (
        <Countdown duration={15} onComplete={handleExperimentBegin} />
      )}
      {step === 3 && (
        <ImageSlideshow images={images} onComplete={handleExperimentComplete} />
      )}
      {step === 4 && (
        <h1 className="thank-you-message">
          Thank you for participating!{" "}
          <button className="home-button" onClick={() => setStep(0)}>
            Go Home
          </button>
        </h1>
      )}
    </div>
  );
};

export default App;

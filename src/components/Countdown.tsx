import React, { useEffect, useState } from "react";

interface Props {
  duration: number;
  onComplete: () => void;
}

const Countdown: React.FC<Props> = ({ duration, onComplete }) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    if (seconds === 0) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, onComplete]);

  return (
    <div className="countdown-container">
      <h1 className="countdown-message">Relax and close your eyes for</h1>
      <h2 className="countdown-timer">{seconds} seconds</h2>
    </div>
  );
};

export default Countdown;

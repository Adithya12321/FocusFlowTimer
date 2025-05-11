import React, { useState, useEffect } from "react";

const TimerComp: React.FC = () => {
  const [time, setTime] = useState<number>(25 * 60); // Default to 25 minutes (Work session)
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [sessionType, setSessionType] = useState<"work" | "break">("work"); // Track session type
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  const alarmSound = new Audio("/alarm.wav"); // Path to the alarm sound file

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(id);
            setIsRunning(false); // Stop the timer when it reaches 0
            playAlarm(); // Play the alarm sound
            if (sessionType === "work") {
              incrementCompletedSessions(); // Increment completed sessions for work
            }
            return 0;
          }
        });
      }, 1000);
      setIntervalId(id);

      return () => clearInterval(id); // Cleanup interval on unmount or when `isRunning` changes
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }, [isRunning]);

  const playAlarm = () => {
    alarmSound.play().catch((error) => {
      console.error("Error playing alarm sound:", error);
    });
  };

  const incrementCompletedSessions = () => {
    const newSessions = parseInt(localStorage.getItem("completedSessions") || "0", 10) + 1;
    localStorage.setItem("completedSessions", newSessions.toString()); // Save to localStorage
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(sessionType === "work" ? 25 * 60 : 5 * 60); // Reset time based on session type
  };

  const switchToWork = () => {
    setIsRunning(false);
    setSessionType("work");
    setTime(25 * 60); // Set time to 25 minutes
  };

  const switchToBreak = () => {
    setIsRunning(false);
    setSessionType("break");
    setTime(5 * 60); // Set time to 5 minutes
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Use the CompletedSessions component */}
      

      <h1 className="text-white">{sessionType === "work" ? "Pomodoro Timer" : "Break Timer"}</h1>
      <div>
        <h2 className="text-4xl pb-4 font-bold">{formatTime(time)}</h2>
      </div>
      <div className="flex justify-center border rounded-t">
        <button
          onClick={switchToWork}
          disabled={sessionType === "work"}
          className="flex-1 border-r p-2 hover:drop-shadow-[0_0_6px_rgba(255,255,255,1)]"
        >
          Work
        </button>
        <button
          onClick={switchToBreak}
          disabled={sessionType === "break"}
          className="flex-1  p-2 hover:drop-shadow-[0_0_6px_rgba(255,255,255,1)]"
        >
          Break
        </button>
      </div>
      <div className="border rounded-b lg:flex">
        <div className="flex border-b">
          <button
          onClick={startTimer}
          disabled={isRunning || time === 0}
          className="flex-1 border- p-2 hover:drop-shadow-[0_0_6px_rgba(255,255,255,1)]"
        >
          Start
        </button>
        <button
          onClick={pauseTimer}
          disabled={!isRunning}
          className="flex-1 border-l lg:border-r p-2 hover:drop-shadow-[0_0_6px_rgba(255,255,255,1)]"
        >
          Pause
        </button>
        </div>
        <button
          onClick={resetTimer}
          className="m-2  hover:drop-shadow-[0_0_6px_rgba(255,255,255,1)]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerComp;

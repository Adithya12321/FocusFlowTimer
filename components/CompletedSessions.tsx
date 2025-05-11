import React, { useEffect, useState } from "react";

const CompletedSessions: React.FC = () => {
  const [completedSessions, setCompletedSessions] = useState<number>(
    parseInt(localStorage.getItem("completedSessions") || "0", 10) // Load from localStorage
  );

  useEffect(() => {
    // Listen for changes in localStorage to update the component dynamically
    const handleStorageChange = () => {
      const storedSessions = parseInt(localStorage.getItem("completedSessions") || "0", 10);
      setCompletedSessions(storedSessions);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div style={{ position: "absolute", top: "10px", right: "10px", color: "white" }}>
      <h3>Completed Sessions: {completedSessions/2}</h3>
    </div>
  );
};

export default CompletedSessions;
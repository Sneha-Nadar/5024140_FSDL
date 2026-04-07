import { useState, useEffect } from "react";

function Stats() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="page">

      <h2>Live Time ⏰</h2>

      <h1>{time}</h1>

    </div>
  );
}

export default Stats;
import { useState, useRef } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(20);
  const interval = useRef<NodeJS.Timeout>();
  const startTimer = () => {
    setTime(20);
    interval.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
  };
  const clearTimer = () => {
    clearInterval(interval.current);
  };
  return {
    time,
    startTimer,
    clearTimer,
  };
};

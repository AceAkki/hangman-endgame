import { useTimer } from "react-timer-hook";
export default function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), interval: 20 });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
       <span>{minutes}</span>:<span>{seconds}</span>:<span>{milliseconds}</span>
      </div>
    </div>
  )

}
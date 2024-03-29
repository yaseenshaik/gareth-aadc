import data from "../data.json";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";
import randomizeArray from "../utils/randomizeArray";
import { sanitizeName } from "../utils/sanitizeName";
import { genRandom } from "../utils/genRandom";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";

const timePeriods = [1, 2.5, 5, 10]; //minutes

export default function Player() {
  const players = useRef([]);
  const [player, setPlayer] = useState({});
  const [periodId, setPeriodId] = useState(2); // 5 mins
  const image = `/img/Locations/${sanitizeName(player.name)}.png`;
  const random = useRef(null);
  const getExpiry = (periodId) => {
    const now = new Date();
    const expiry = now.setSeconds(
      now.getSeconds() + timePeriods[periodId] * 60,
    );
    return expiry;
  };
  const { seconds, minutes, isRunning, start, resume, pause, restart } =
    useTimer({
      expiryTimestamp: getExpiry(periodId),
      autoStart: false,
    });
  const reRoll = () => {
    if (players.current.length === 0) {
      players.current = randomizeArray(data.hosts);
    }
    const newPlayer = players.current.pop();
    setPlayer(newPlayer);
    random.current = genRandom(3);
    restart(getExpiry(periodId), false);
  };
  const increasePeriod = () => {
    const newPeriodId = Math.min(periodId + 1, timePeriods.length - 1);
    restart(getExpiry(newPeriodId), isRunning);
    setPeriodId(newPeriodId);
  };
  const decreasePeriod = () => {
    const newPeriodId = Math.max(0, periodId - 1);
    restart(getExpiry(newPeriodId), isRunning);
    setPeriodId(newPeriodId);
  };

  useEffect(() => {
    reRoll();
  }, []);

  return (
    <div className="App flex player host">
      <div className="flex row align-h top">
        <img className="avatar border" src={image} />
        <div className="flex num-col align-h">
          <h3 className="border name">{player.name}</h3>
          <div className="digit border align-v align-h flex">
            {random.current}
          </div>
        </div>
      </div>
      <p className="border">{player.bio}</p>
      <p className="border">{player.powers}</p>
      <div className="flex row timer align-h">
        <Button onClick={decreasePeriod}>-</Button>
        <span>
          {minutes}:{seconds?.toString().padStart(2, "0")}
        </span>
        <Button onClick={increasePeriod}>+</Button>
      </div>
      <div className="flex row button-footer">
        <Link to="/">
          <Button className="animate__animated animate__fadeInUp">Back</Button>
        </Link>
        <Button
          onClick={isRunning ? pause : resume}
          className="animate__animated animate__fadeInUp"
        >
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button
          onClick={() => restart(getExpiry(periodId), isRunning)}
          className="animate__animated animate__fadeInUp"
        >
          Reset
        </Button>
        <Button
          onClick={reRoll}
          className="animate__animated animate__fadeInUp"
        >
          Reroll
        </Button>
      </div>
    </div>
  );
}

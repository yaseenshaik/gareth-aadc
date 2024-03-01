import data from "../data.json";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";
import randomizeArray from "../utils/randomizeArray";
import { Link } from "react-router-dom";

export default function Player() {
  const players = useRef([]);
  const [player, setPlayer] = useState({});
  const reRoll = () => {
    if (players.current.length === 0) {
      players.current = randomizeArray(data.players);
    }
    const newPlayer = players.current.pop();
    setPlayer(newPlayer);
  };
  const image = `/img/Characters/${player.name}.png`;
  const nameImg = `/img/Characters/NameImages/${player.name}Name.png`;

  useEffect(() => {
    reRoll();
  }, []);

  return (
    <div className="App flex player">
      <div className="flex row align-h top">
        <img className="avatar border" src={image} />
        <div className="flex num-col align-h">
          <img src={nameImg} />
          <div className="digit border align-v align-h flex">
            {player.i + 1}
          </div>
        </div>
      </div>
      <p className="border">{player.bio}</p>
      <p className="border">{player.powers}</p>
      <div className="flex row button-footer">
        <Link to="/">
          <Button className="animate__animated animate__fadeInUp">Back</Button>
        </Link>
        <Button
          onClick={reRoll}
          className="animate__animated animate__fadeInUp"
        >
          Reroll Player
        </Button>
      </div>
    </div>
  );
}

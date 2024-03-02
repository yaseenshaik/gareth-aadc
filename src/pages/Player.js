import data from "../data.json";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";
import randomizeArray from "../utils/randomizeArray";
import { sanitizeName } from "../utils/sanitizeName";
import { genRandom } from "../utils/genRandom";
import { Link } from "react-router-dom";

export default function Player() {
  const players = useRef([]);
  const [player, setPlayer] = useState({});
  const random = useRef(null);
  const reRoll = () => {
    if (players.current.length === 0) {
      players.current = randomizeArray(data.players);
    }
    random.current = genRandom(4);
    const newPlayer = players.current.pop();
    setPlayer(newPlayer);
  };
  const image = `/img/Characters/${sanitizeName(player.name)}.png`;
  const nameImg = `/img/Characters/NameImages/${sanitizeName(player.name)}Name.png`;

  useEffect(() => {
    reRoll();
  }, []);

  return (
    <div className="App flex player">
      <div className="flex row align-h top">
        <img className="avatar border" src={image} />
        <div className="flex num-col align-h">
          {player.noNameImage ? <h3>{player.name}</h3> : <img src={nameImg} />}
          <div className="digit border align-v align-h flex">
            {random.current}
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

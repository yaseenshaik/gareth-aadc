import { useState } from "react";
import Welcome from "../components/Welcome";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const handleWelcome = () => setShowButtons(true);

  return (
    <div className="App flex">
      <Welcome onDone={handleWelcome} />

      <div className="flex welcome-second">
        {showButtons && (
          <>
            <p className="animate__animated animate__fadeInUp border">
              Hello there and welcome to aaaand ACTION: Directors Cut. If this
              is your first time here, take a look at the tutorial page. If this
              isn't your first time, or you don't care about the tutorial, jump
              right in! If you want a version with BONUS CHARACTERS check out
              the version on{" "}
              <a
                target="_blank"
                href="https://www.figma.com/proto/umE9uQNTcuqVr0ef63twmK/AADC?type=design&node-id=6-4&t=PJnFh3OMk7D0ITXk-1&scaling=contain&page-id=0%3A1&starting-point-node-id=6%3A21&mode=design"
              >
                Figma!
              </a>{" "}
              And you can also pick up the downloadable beta for absolutely FREE
              on{" "}
              <a
                target="_blank"
                href="https://gareth-simplestudios.itch.io/and-action-directors-cut"
              >
                Itch.IO!
              </a>{" "}
              It has a staggering 15 new characters, and 5 new locations!
            </p>
            <div className="flex row align-h button-footer">
              <Link to="/player">
                <Button className="animate__animated animate__fadeInUp">
                  Player
                </Button>
              </Link>
              <Link to="/host">
                <Button className="animate__animated animate__fadeInUp">
                  Host
                </Button>
              </Link>
              <Link to="/tutorial">
                <Button className="animate__animated animate__fadeInUp">
                  Tutorial
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

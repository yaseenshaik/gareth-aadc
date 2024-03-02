import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const title = "aaaaaaaaaaand ACTION!";
const subTitle = "Director's Cut";

const Welcome = ({ onDone }) => {
  const [init, setInit] = useState(false);
  const [showDC, setShowDC] = useState(false);
  const handleFirstDone = () => {
    setShowDC(true);
  };
  const handleDone = () => {
    sessionStorage.setItem("loaded", "TRUE");
    onDone();
  };
  const [playAnimation, setAnimation] = useState(true);

  useEffect(() => {
    const loaded = sessionStorage.getItem("loaded");
    setAnimation(!loaded);
    setInit(true);
    if (loaded) onDone();
  }, []);

  return (
    <>
      {init && (
        <div className="welcome flex align-h align-v">
          {playAnimation ? (
            <>
              <TypeAnimation
                className="title"
                sequence={[title, handleFirstDone]}
                wrapper="h1"
                speed={40}
                cursor={false}
              />
              {showDC && (
                <TypeAnimation
                  className="sub"
                  sequence={[subTitle, handleDone]}
                  wrapper="h2"
                  speed={50}
                  cursor={false}
                />
              )}
            </>
          ) : (
            <>
              <h1 className="title">{title}</h1>
              <h2 className="sub">{subTitle}</h2>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Welcome;

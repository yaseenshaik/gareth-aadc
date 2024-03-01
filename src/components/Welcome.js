import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Welcome = ({ onDone }) => {
  const [showDC, setShowDC] = useState(false);
  const handleFirstDone = () => setShowDC(true);

  return (
    <div className="welcome flex align-h align-v">
      <TypeAnimation
        className="title"
        sequence={["aaaaaaaaaaand ACTION!", handleFirstDone]}
        wrapper="h1"
        speed={30}
        cursor={false}
      />
      {showDC && (
        <TypeAnimation
          className="sub"
          sequence={["Director's Cut", onDone]}
          wrapper="h2"
          speed={30}
          cursor={false}
        />
      )}
    </div>
  );
};

export default Welcome;

import { TypeAnimation } from "react-type-animation";

const Typing: React.FC = () => {
  return (
    <TypeAnimation
      sequence={[
        "Next.js", 1000,
        "TypeScript", 1000,
        "Tailwind CSS", 1000,
        "React.js", 1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="ml-2 font-bold text-lightcyan"
      style={{
        fontSize: "1.5em",
        display: "inline-block",
        textAlign: "left",
      }}
    />
  );
};

export default Typing;

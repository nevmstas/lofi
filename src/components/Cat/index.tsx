import { useCurrentFrame, useVideoConfig } from "remotion";
import {
  CatBody,
  CatFace,
  CatTail,
  CatFrontLeftPaw,
  CatFrontRightPaw,
  CatBackPaw,
} from "../../assets";
import {
  breathingAnimation,
  springEntrance,
} from "../../utils/animations";

interface CatProps {
  entranceDelay?: number;
  breathingDuration?: number;
  tailCurlDuration?: number;
  className?: string;
}

export const Cat: React.FC<CatProps> = ({
  entranceDelay = 0,
  breathingDuration = 90,
  tailCurlDuration = 120,
  className = "",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = springEntrance({
    frame,
    fps,
    delay: entranceDelay,
    config: {
      damping: 80,
      mass: 0.8,
    },
  });

  const breathScale = breathingAnimation({
    frame,
    fps,
    scale: [1, 1.025],
    duration: breathingDuration,
  });

  return (
    <div
      className={`absolute ${className}`}
      style={{
        opacity: entrance,
        transform: `scale(${entrance})`,
      }}
    >
      {/* Cat body base */}
      <div className="relative border-2 border-blue-500">
        {/* Front left paw */}
        <div className="absolute bottom-0 -right-5">
          <CatFrontLeftPaw />
        </div>

        <div>
          <CatBody
            style={{
              transform: `scale(${breathScale})`,
              transformOrigin: "center bottom",
            }}
          />
        </div>

        {/* Cat face */}
        <div className="absolute top-[65%] right-5">
          <CatFace />
        </div>

        {/* Tail */}
        <div className="absolute -bottom-40 -left-10">
          <CatTail />
        </div>

        {/* Front right paw */}
        <div className="absolute -bottom-10 right-18">
          <CatFrontRightPaw />
        </div>

        {/* Back paw */}
        <div className="absolute -bottom-10 left-0">
          <CatBackPaw />
        </div>
      </div>
    </div>
  );
};

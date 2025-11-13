import "./index.css";
import { Composition } from "remotion";
import { MobileScene } from "./compositions/mobile-scene";
import { MOBILE_SCENE_CONFIG } from "./compositions/mobile-scene/constants";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={MOBILE_SCENE_CONFIG.id}
        component={MobileScene}
        durationInFrames={MOBILE_SCENE_CONFIG.durationInFrames}
        fps={MOBILE_SCENE_CONFIG.fps}
        width={MOBILE_SCENE_CONFIG.width}
        height={MOBILE_SCENE_CONFIG.height}
      />
    </>
  );
};

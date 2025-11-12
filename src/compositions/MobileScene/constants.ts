
export const MOBILE_SCENE_CONFIG = {
  width: 1080,
  height: 1920,
  fps: 30,
  durationInFrames: 300, // 10 seconds
  id: 'MobileScene',
} as const;

export const Z_INDEX = {
  table: 10,
  person: 20,
  cat: 30,
} as const;


export const ANIMATION_TIMING = {
  sceneEntranceDelay: 0,
  tableEntranceDelay: 0,
  personEntranceDelay: 15,
  catEntranceDelay: 30,
  breathingDuration: 90, // frames for one complete breath
  tailCurlDuration: 120, // frames for one complete tail curl
  eyeMovementDuration: 180, // frames for one complete eye movement cycle
  blinkInterval: 150, // frames between blinks
} as const;



export const MOBILE_SCENE_CONFIG = {
  width: 1080,
  height: 1920,
  fps: 30,
  durationInFrames: 300, // 10 seconds
  id: 'mobile-scene',
} as const;

export const Z_INDEX = {
  window: 5,
  planet: 6,
  table: 10,
  person: 20,
  coffeeCup: 25,
  cat: 30,
} as const;


export const ANIMATION_TIMING = {
  sceneEntranceDelay: 0,
  windowEntranceDelay: 0, // First: window appears
  tableEntranceDelay: 0, // First: table appears with window
  personEntranceDelay: 20, // Second: person appears after window/table
  coffeeCupEntranceDelay: 30, // Third: coffee cup appears between person and cat
  catEntranceDelay: 40, // Last: cat appears after person
  breathingDuration: 90, // frames for one complete breath
  tailCurlDuration: 120, // frames for one complete tail curl
  eyeMovementDuration: 180, // frames for one complete eye movement cycle
  blinkInterval: 150, // frames between blinks
  glowDuration: 60, // frames for one complete glow pulse
  floatingDuration: 120, // frames for one complete floating cycle
} as const;


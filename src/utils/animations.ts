import { interpolate, spring } from 'remotion';

interface BreathingAnimationProps {
  frame: number;
  fps: number;
  scale?: [number, number];
  duration?: number;
}


export const breathingAnimation = ({
  frame,
  fps,
  scale = [1, 1.03],
  duration = 90,
}: BreathingAnimationProps): number => {
  const progress = (frame % duration) / duration;
  const breathCycle = Math.sin(progress * Math.PI * 2);
  return interpolate(breathCycle, [-1, 1], scale);
};

interface SpringAnimationProps {
  frame: number;
  fps: number;
  delay?: number;
  config?: {
    damping?: number;
    mass?: number;
    stiffness?: number;
    overshootClamping?: boolean;
  };
}

export const springEntrance = ({
  frame,
  fps,
  delay = 0,
  config = {},
}: SpringAnimationProps): number => {
  return spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 100,
      mass: 0.5,
      ...config,
    },
  });
};

interface TailCurlAnimationProps {
  frame: number;
  baseRotation?: number;
  curlAmount?: number;
  duration?: number;
}

export const tailCurlAnimation = ({
  frame,
  baseRotation = 0,
  curlAmount = 15,
  duration = 120,
}: TailCurlAnimationProps): number => {
  const progress = (frame % duration) / duration;
  const curlCycle = Math.sin(progress * Math.PI * 2);
  return baseRotation + curlCycle * curlAmount;
};

interface EyeMovementProps {
  frame: number;
  duration?: number;
  blinkInterval?: number;
}

export const eyeMovement = ({
  frame,
  duration = 180,
  blinkInterval = 150,
}: EyeMovementProps): { x: number; y: number; scaleY: number } => {
  const progress = (frame % duration) / duration;
  const movementX = Math.sin(progress * Math.PI * 2) * 2;
  const movementY = Math.cos(progress * Math.PI * 2) * 1;

  // Blink animation
  const blinkProgress = frame % blinkInterval;
  const isBlinking = blinkProgress < 6;
  const blinkPhase = isBlinking ? blinkProgress / 6 : 1;
  const scaleY = isBlinking
    ? Math.abs(Math.sin(blinkPhase * Math.PI))
    : 1;

  return {
    x: movementX,
    y: movementY,
    scaleY,
  };
};

export const fadeIn = (frame: number, start = 0, duration = 30): number => {
  if (frame < start) return 0;
  if (frame > start + duration) return 1;
  return (frame - start) / duration;
};

interface TailSpiralAnimationProps {
  frame: number;
  duration?: number;
  rotations?: number;
}


export const tailSpiralAnimation = ({
  frame,
  duration = 120,
  rotations = 3,
}: TailSpiralAnimationProps): { rotation: number; scale: number } => {
  const progress = (frame % duration) / duration;
  const rotation = progress * 360 * rotations;
  const scale = 1 - Math.sin(progress * Math.PI) * 0.3;
  
  return {
    rotation,
    scale,
  };
};


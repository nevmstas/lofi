import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import {
  springEntranceFromBottom,
  springEntranceFromTop,
  springEntranceFromLeft,
  springEntranceFromRight,
  springEntrance,
} from '../../utils/animations';

type Direction = 'left' | 'right' | 'top' | 'bottom' | 'scale';

interface FadeInProps {
  children: React.ReactNode;
  from?: Direction;
  delay?: number;
  distance?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  config?: {
    damping?: number;
    mass?: number;
    stiffness?: number;
    overshootClamping?: boolean;
  };
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  from = 'scale',
  delay = 0,
  distance = 100,
  className = '',
  style,
  config,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const getAnimation = () => {
    switch (from) {
      case 'bottom':
        return springEntranceFromBottom({ frame, fps, delay, distance, config });
      case 'top':
        return springEntranceFromTop({ frame, fps, delay, distance, config });
      case 'left':
        return springEntranceFromLeft({ frame, fps, delay, distance, config });
      case 'right':
        return springEntranceFromRight({ frame, fps, delay, distance, config });
      case 'scale':
      default:
        const scaleValue = springEntrance({ frame, fps, delay, config });
        return { opacity: scaleValue, transform: `scale(${scaleValue})` };
    }
  };

  const animation = getAnimation();

  const getTransform = () => {
    if ('transform' in animation) {
      return animation.transform;
    }
    if ('translateY' in animation) {
      return `translateY(${animation.translateY}px)`;
    }
    if ('translateX' in animation) {
      return `translateX(${animation.translateX}px)`;
    }
    return undefined;
  };

  return (
    <div
      className={className}
      style={{
        opacity: animation.opacity,
        transform: getTransform(),
        ...style,
      }}
    >
      {children}
    </div>
  );
};


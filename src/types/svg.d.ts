/**
 * Type declarations for SVG imports via SVGR
 * This allows TypeScript to recognize .svg files as React components
 */

declare module '*.svg' {
  import * as React from 'react';
  
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}


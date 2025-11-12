import { useCurrentFrame, useVideoConfig } from 'remotion';
import { TableSvg } from '../../assets';
import { springEntrance } from '../../utils/animations';

interface TableProps {
  entranceDelay?: number;
}

export const Table: React.FC<TableProps> = ({ entranceDelay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = springEntrance({
    frame,
    fps,
    delay: entranceDelay,
  });

  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex items-end justify-center"
      style={{
        opacity: entrance,
        transform: `translateY(${(1 - entrance) * 50}px)`,
      }}
    >
      <div>
        <TableSvg />
      </div>
    </div>
  );
};


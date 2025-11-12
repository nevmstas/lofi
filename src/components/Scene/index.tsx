import { Table } from '../Table';
import { Person } from '../Person';
import { Cat } from '../Cat';
import { ANIMATION_TIMING, Z_INDEX } from '../../compositions/MobileScene/constants';

interface SceneProps {
  backgroundColor?: string;
}

export const Scene: React.FC<SceneProps> = ({ backgroundColor = '#E8DCC7' }) => {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Background gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 50%)',
        }}
      />

      {/* Table - positioned at the bottom */}
      <div style={{ zIndex: Z_INDEX.table }}>
        <Table entranceDelay={ANIMATION_TIMING.tableEntranceDelay} />
      </div>

      {/* Person with laptop - positioned on the table */}
      <div style={{ zIndex: Z_INDEX.person }}>
        <Person
          entranceDelay={ANIMATION_TIMING.personEntranceDelay}
          className="bottom-[648px] left-190"
          eyeMovementDuration={ANIMATION_TIMING.eyeMovementDuration}
          blinkInterval={ANIMATION_TIMING.blinkInterval}
        />
      </div>

      {/* Cat - positioned beside the person */}
      <div style={{ zIndex: Z_INDEX.cat }}>
        <Cat
          entranceDelay={ANIMATION_TIMING.catEntranceDelay}
          breathingDuration={ANIMATION_TIMING.breathingDuration}
          tailCurlDuration={ANIMATION_TIMING.tailCurlDuration}
          className="bottom-[648px] left-10"
        />
      </div>
    </div>
  );
};


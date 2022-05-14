import ClimbDownIcon from '@/assets/icon/icon_down.svg';
import ClimbUpIcon from '@/assets/icon/icon_up.svg';
import { RemoteSanData } from '@/service/api/types/san';

export const SanDetailGridView = (props: RemoteSanData) => (
  <div className="san-grid-table">
    <div className="title-wrapper">
      <div className="title">{props.name}</div>
    </div>
    <div className="level-wrapper">
      <div>level</div>
      <div>{props.level}</div>
    </div>
    <div className="height-wrapper">
      <div>height</div>
      <div>{props.height}</div>
    </div>
    <div className="length-wrapper">
      <div>length</div>
      <div>{props.length}</div>
    </div>
    <div className="time-wrapper">
      <div>climbing{'\n'}time</div>
      <div>
        <div>
          <ClimbUpIcon />
          <div>2:30</div>
        </div>
        <div>
          <ClimbDownIcon />
          <div>3:00</div>
        </div>
      </div>
    </div>
  </div>
);

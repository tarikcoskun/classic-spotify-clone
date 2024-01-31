import { getReadableTime } from "@/helpers/getReadableTime";

// Icons
import Icon from "@/ui/Icon";

// Styles
import s from "@/styles/Player.module.scss";

const elapsed = 26800;
const total = 248440;

const volume = 75;

export default function Player() {
  return (
    <div className={s.player}>
      <div className={s.controlsLeft}>
        <button aria-label="Previous">
          <Icon icon="previous" size={24} />
        </button>
        <button aria-label="Play">
          <Icon icon="play" size={24} />
        </button>
        <button aria-label="Next">
          <Icon icon="next" size={24} />
        </button>
      </div>
      <div className={s.volume}>
        <div className={s.volumeProgress}>
          <div className={s.progressBarWrapper} style={{ ["--progress-bar-transform" as any]: `${volume}%` }}>
            <div className={s.progressBar}>
              <div className={s.current} />
            </div>
            <div className={s.dot} />
          </div>
        </div>
        <button className="toggle" aria-label="Toggle volume">
          <Icon icon="volume" size={20} />
        </button>
      </div>
      <div className={s.playback}>
        <span className={s.time}>{getReadableTime(elapsed)}</span>
        <div className={s.playbackProgress}>
          <div className={s.progressBarWrapper} style={{ ["--progress-bar-transform" as any]: `${(elapsed / total) * 100}%` }}>
            <div className={s.progressBar}>
              <div className={s.current} />
            </div>
            <div className={s.dot} />
          </div>
        </div>
        <span className={s.time}>{getReadableTime(total)}</span>
      </div>
      <div className={s.controlsRight}>
        <button className="toggle" aria-label="Toggle shuffle" data-state="active">
          <Icon icon="shuffle" size={20} />
        </button>
        <button className="toggle" aria-label="Toggle repeat">
          <Icon icon="repeat" size={20} />
        </button>
      </div>
    </div>
  );
}

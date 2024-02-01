import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { getReadableTime } from "@/helpers/getReadableTime";
import { clamp } from "@/helpers/clamp";

// Components
import Icon from "@/ui/Icon";

// Store
import { PlayerContext } from "@/store/player";

// Styles
import s from "@/styles/Player.module.scss";

export default function Player() {
  const context = useContext(PlayerContext);
  const pbDotRef = useRef<HTMLDivElement>(null);
  const pbProgressRef = useRef<HTMLDivElement>(null);
  const volDotRef = useRef<HTMLDivElement>(null);
  const volProgressRef = useRef<HTMLDivElement>(null);
  const [shuffle, setShuffle] = useState(true);
  const [repeat, setRepeat] = useState(false);

  const handlePbChange = (x: number) => {
    if (!pbProgressRef.current) return;
    const clickPos = x - pbProgressRef.current.offsetLeft;
    const current = (clickPos / pbProgressRef.current.offsetWidth) * 100;

    context.setPlaybackProgress((val) => ({
      ...val,
      elapsed: clamp(0, (current * val.total) / 100, val.total),
    }));
  };

  const handleVolChange = (x: number) => {
    if (!volProgressRef.current) return;
    context.setMuted(false);
    const clickPos = x - volProgressRef.current.offsetLeft;
    context.setVolume(clamp(0, clickPos, 100));
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    const handleMouseUp = () => {
      if (target.dataset.listener === "pb") pbDotRef.current?.setAttribute("aria-pressed", "false");
      else if (target.dataset.listener === "vol") volDotRef.current?.setAttribute("aria-pressed", "false");
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!pbProgressRef.current || !volProgressRef.current) return;
      if (target.dataset.listener === "pb") {
        handlePbChange(event.pageX);
      } else if (target.dataset.listener === "vol") {
        handleVolChange(event.pageX);
      }
    };

    const target = event.target as HTMLElement;

    if (target.dataset.listener === "pb") pbDotRef.current?.setAttribute("aria-pressed", "true");
    else if (target.dataset.listener === "vol") volDotRef.current?.setAttribute("aria-pressed", "true");
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
  };

  const handleWheel = (event: React.WheelEvent) => {
    context.setMuted(false);
    context.setVolume((val) => clamp(0, context.isMuted ? 10 : val + (event.deltaY * -1) / 10, 100));
  };

  return (
    <div className={s.player}>
      <div className={s.controlsLeft}>
        <button
          aria-label="Previous"
          onClick={() => {
            context.setPlaybackProgress((val) => ({ ...val, elapsed: 0 }));
          }}
        >
          <Icon icon="previous" size={24} />
        </button>
        <button
          aria-label={context.isPlaying ? "Pause" : "Play"}
          onClick={() => {
            context.setPlaying((val) => !val);
          }}
        >
          <Icon icon={context.isPlaying ? "pause" : "play"} size={24} />
        </button>
        <button aria-label="Next">
          <Icon icon="next" size={24} />
        </button>
      </div>
      <div className={s.volume} onWheel={handleWheel}>
        <div
          ref={volProgressRef}
          onMouseDown={handleMouseDown}
          onClick={(event) => handleVolChange(event.pageX)}
          className={s.volumeProgress}
          data-listener="vol"
        >
          <div
            className={s.progressBarWrapper}
            style={{ ["--progress-bar-transform" as any]: `${context.isMuted ? 0 : context.volume}%` }}
            data-listener="vol"
          >
            <div className={s.progressBar} data-listener="vol">
              <div className={s.current} data-listener="vol" />
            </div>
            <div ref={volDotRef} className={s.dot} data-listener="vol" />
          </div>
        </div>
        <button
          className="toggle"
          aria-label="Toggle muted"
          onClick={() => {
            context.setMuted((val) => !val);
          }}
        >
          <Icon
            icon={
              context.isMuted || context.volume === 0
                ? "volume-muted"
                : context.volume >= 70
                ? "volume-high"
                : context.volume >= 40
                ? "volume-medium"
                : "volume-low"
            }
            size={20}
          />
        </button>
      </div>
      <div className={s.playback}>
        <span className={s.time}>{getReadableTime(context.playbackProgress.elapsed)}</span>
        <div
          ref={pbProgressRef}
          onMouseDown={handleMouseDown}
          onClick={(event) => handlePbChange(event.pageX)}
          className={s.playbackProgress}
          data-listener="pb"
        >
          <div
            className={s.progressBarWrapper}
            style={{ ["--progress-bar-transform" as any]: `${(context.playbackProgress.elapsed / context.playbackProgress.total) * 100}%` }}
            data-listener="pb"
          >
            <div className={s.progressBar} data-listener="pb">
              <div className={s.current} data-listener="pb" />
            </div>
            <div ref={pbDotRef} className={s.dot} data-listener="pb" />
          </div>
        </div>
        <span className={s.time}>{getReadableTime(context.playbackProgress.total)}</span>
      </div>
      <div className={s.controlsRight}>
        <button
          className="toggle"
          aria-label="Toggle shuffle"
          data-state={shuffle ? "active" : "inactive"}
          onClick={() => {
            setShuffle((val) => !val);
          }}
        >
          <Icon icon="shuffle" size={20} />
        </button>
        <button
          className="toggle"
          aria-label="Toggle repeat"
          data-state={repeat ? "active" : "inactive"}
          onClick={() => {
            setRepeat((val) => !val);
          }}
        >
          <Icon icon="repeat" size={20} />
        </button>
      </div>
    </div>
  );
}

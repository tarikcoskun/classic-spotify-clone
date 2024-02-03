import { type Dispatch, type SetStateAction, createContext, useState, useEffect, useRef } from "react";

import { clamp } from "@/helpers/clamp";

interface PlayerValue {
  isExpanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  isMuted: boolean;
  setMuted: Dispatch<SetStateAction<boolean>>;
  isPlaying: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
  playback: Playback;
  setPlayback: Dispatch<SetStateAction<Playback>>;
}

interface Playback {
  elapsed: number;
  duration: number;
  track: Track;
}

interface Track {
  name: string;
  artists: Artist[];
  album: Album;
}

interface Artist {
  uri?: string;
  profile: {
    name: string;
  };
}

interface Album {
  name: string;
  coverArt: Source[];
}

interface Source {
  url: string;
  width?: number | null;
  height?: number | null;
}

export const PlayerContext = createContext({} as PlayerValue);

const PlayerProvider = ({ children }: React.PropsWithChildren) => {
  const [isExpanded, setExpanded] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [playback, setPlayback] = useState<Playback>({
    elapsed: 0,
    duration: 248440,
    track: {
      name: "Under Pressure",
      artists: [
        {
          profile: {
            name: "Queen",
          },
        },
        {
          profile: {
            name: "David Bowie",
          },
        },
      ],
      album: {
        name: "Hot Space",
        coverArt: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02d254ca497999ae980a5a38c5",
            width: 300,
            height: 300,
          },
        ],
      },
    },
  });

  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (isPlaying && playback.elapsed < playback.duration) {
      timeoutRef.current = setTimeout(() => {
        setPlayback((val) => ({ ...val, elapsed: clamp(0, val.elapsed + 1000, val.duration) }));
      }, 1000);
    } else if (playback.elapsed >= playback.duration) {
      setPlaying(false);
      clearTimeout(timeoutRef.current);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isPlaying, playback.elapsed, playback.duration]);

  const initialState = {
    isExpanded,
    setExpanded,
    isMuted,
    setMuted,
    isPlaying,
    setPlaying,
    volume,
    setVolume,
    playback,
    setPlayback: setPlayback,
  };

  return <PlayerContext.Provider value={initialState}>{children}</PlayerContext.Provider>;
};

export default PlayerProvider;

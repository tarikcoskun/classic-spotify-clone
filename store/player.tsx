import { type Dispatch, type SetStateAction, createContext, useState, useEffect } from "react";

import { clamp } from "@/util/clamp";

interface PlayerValue {
  isExpanded: boolean;
  isMuted: boolean;
  isPlaying: boolean;
  volume: number;
  shuffle: boolean;
  repeat: boolean;
  playback: Playback;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  setMuted: Dispatch<SetStateAction<boolean>>;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  setVolume: Dispatch<SetStateAction<number>>;
  setShuffle: Dispatch<SetStateAction<boolean>>;
  setRepeat: Dispatch<SetStateAction<boolean>>;
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
  const [shuffle, setShuffle] = useState(true);
  const [repeat, setRepeat] = useState(false);
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

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isPlaying && playback.elapsed < playback.duration) {
      timer = setTimeout(() => {
        setPlayback((val) => ({
          ...val,
          elapsed: clamp(0, val.elapsed + 1000, val.duration),
        }));
      }, 1000);
    }

    if (playback.elapsed >= playback.duration) {
      setPlaying(false);
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isPlaying, playback.elapsed, playback.duration]);

  const initialState = {
    isExpanded,
    isMuted,
    isPlaying,
    volume,
    shuffle,
    repeat,
    playback,
    setExpanded,
    setMuted,
    setPlaying,
    setVolume,
    setShuffle,
    setRepeat,
    setPlayback,
  };

  return <PlayerContext.Provider value={initialState}>{children}</PlayerContext.Provider>;
};

export default PlayerProvider;

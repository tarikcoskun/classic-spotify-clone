import { createContext, useState } from "react";

interface TrackValue {
  track: string | null;
  setTrack: React.Dispatch<React.SetStateAction<string | null>>;
  isPlaying: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TrackContext = createContext({} as TrackValue);

const TrackProvider = (props: React.PropsWithChildren) => {
  const { children } = props;
  const [track, setTrack] = useState<string | null>(null);
  const [isPlaying, setPlaying] = useState(false);

  const initialState = { track, setTrack, isPlaying, setPlaying };

  return <TrackContext.Provider value={initialState}>{children}</TrackContext.Provider>;
};

export default TrackProvider;

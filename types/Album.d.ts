export interface AlbumResponse {
  data: Data;
}

export interface Data {
  albumUnion: AlbumUnion;
}

export interface AlbumUnion {
  __typename: string;
  uri: string;
  name: string;
  artists: AlbumUnionArtists;
  coverArt: CoverArt;
  discs: Discs;
  releases: Releases;
  type: Type;
  date: AlbumUnionDate;
  playability: ItemPlayability;
  label: string;
  copyright: Copyright;
  courtesyLine: string;
  saved: boolean;
  sharingInfo: AlbumUnionSharingInfo;
  tracks: AlbumUnionTracks;
  moreAlbumsByArtist: MoreAlbumsByArtist;
}

export interface AlbumUnionArtists {
  totalCount: number;
  items: PurpleItem[];
}

export interface PurpleItem {
  id: string;
  uri: URI;
  profile: Profile;
  visuals: Visuals;
  sharingInfo: PurpleSharingInfo;
}

export interface Profile {
  name: Name;
}

export enum Name {
  SenaŞener = "Sena Şener",
}

export interface PurpleSharingInfo {
  shareUrl: string;
}

export enum URI {
  SpotifyArtist7CW2EGwAuElNq09RVTZYsM = "spotify:artist:7CW2eGwAuElNq09rVtZYsM",
}

export interface Visuals {
  avatarImage: AvatarImage;
}

export interface AvatarImage {
  sources: Source[];
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Copyright {
  totalCount: number;
  items: CopyrightItem[];
}

export interface CopyrightItem {
  type: string;
  text: string;
}

export interface CoverArt {
  extractedColors: ExtractedColors;
  sources: Source[];
}

export interface ExtractedColors {
  colorRaw: Color;
  colorLight: Color;
  colorDark: Color;
}

export interface Color {
  hex: string;
}

export interface AlbumUnionDate {
  isoString: string;
  precision: string;
}

export interface Discs {
  totalCount: number;
  items: DiscsItem[];
}

export interface DiscsItem {
  number: number;
  tracks: AssociatedVideosClass;
}

export interface AssociatedVideosClass {
  totalCount: number;
}

export interface MoreAlbumsByArtist {
  items: MoreAlbumsByArtistItem[];
}

export interface MoreAlbumsByArtistItem {
  discography: Discography;
}

export interface Discography {
  popularReleasesAlbums: PopularReleasesAlbums;
}

export interface PopularReleasesAlbums {
  items: PopularReleasesAlbumsItem[];
}

export interface PopularReleasesAlbumsItem {
  id: string;
  uri: string;
  name: string;
  date: ItemDate;
  coverArt: AvatarImage;
  playability: ItemPlayability;
  sharingInfo: AlbumUnionSharingInfo;
  type: Type;
}

export interface ItemDate {
  year: number;
}

export interface ItemPlayability {
  playable: boolean;
  reason: Reason;
}

export enum Reason {
  Playable = "PLAYABLE",
}

export interface AlbumUnionSharingInfo {
  shareId: string;
  shareUrl: string;
}

export enum Type {
  Album = "ALBUM",
  Single = "SINGLE",
}

export interface Releases {
  totalCount: number;
  items: ReleasesItem[];
}

export interface ReleasesItem {
  uri: string;
  name: string;
}

export interface AlbumUnionTracks {
  totalCount: number;
  items: TracksItem[];
}

export interface TracksItem {
  uid: string;
  track: Track;
}

export interface Track {
  saved: boolean;
  uri: string;
  name: string;
  playcount: string;
  discNumber: number;
  trackNumber: number;
  associations: Associations;
  contentRating: ContentRating;
  relinkingInformation: null;
  duration: Duration;
  playability: TrackPlayability;
  artists: TrackArtists;
}

export interface TrackArtists {
  items: FluffyItem[];
}

export interface FluffyItem {
  uri: URI;
  profile: Profile;
}

export interface Associations {
  associatedVideos: AssociatedVideosClass;
}

export interface ContentRating {
  label: Label;
}

export enum Label {
  None = "NONE",
}

export interface Duration {
  totalMilliseconds: number;
}

export interface TrackPlayability {
  playable: boolean;
}

export interface AlbumResponse {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  albumUnion: AlbumUnion;
}

export interface AlbumUnion {
  __typename: string;
  uri: string;
  name: string;
  artists: ReleasesClass;
  coverArt: CoverArt;
  discs: Discs;
  releases: ReleasesClass;
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

export interface ReleasesClass {
  totalCount: number;
  items: ReleasesItem[];
}

export interface ReleasesItem {
  id: string;
  uri: string;
  profile: Profile;
  visuals: Visuals;
  sharingInfo: PurpleSharingInfo;
}

export interface Profile {
  name: string;
}

export interface PurpleSharingInfo {
  shareUrl: string;
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
  items: PurpleItem[];
}

export interface PurpleItem {
  uri: string;
  profile: Profile;
}

export interface Associations {
  associatedVideos: AssociatedVideosClass;
}

export interface ContentRating {
  label: string;
}

export interface Duration {
  totalMilliseconds: number;
}

export interface TrackPlayability {
  playable: boolean;
}

export interface Extensions {}

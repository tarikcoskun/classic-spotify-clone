export interface PlaylistResponse {
  data: PlaylistData;
  extensions: Extensions;
}

export interface PlaylistData {
  playlistV2: PlaylistV2;
}

export interface PlaylistV2 {
  __typename: string;
  revisionId: string;
  uri: string;
  name: string;
  description: string;
  ownerV2: OwnerV2;
  images: Images;
  basePermission: string;
  followers: number;
  format: string;
  attributes: Attribute[];
  sharingInfo: SharingInfo;
  content: Content;
}

export interface Attribute {
  key: string;
  value: string;
}

export interface Content {
  __typename: string;
  totalCount: number;
  pagingInfo: PagingInfo;
  items: ContentItem[];
}

export interface ContentItem {
  uid: string;
  addedAt: AddedAt;
  addedBy: null;
  attributes: any[];
  itemV2: ItemV2;
}

export interface AddedAt {
  isoString: string;
}

export interface ItemV2 {
  __typename: ItemV2Typename;
  data: ItemV2Data;
}

export enum ItemV2Typename {
  TrackResponseWrapper = "TrackResponseWrapper",
}

export interface ItemV2Data {
  __typename: DataTypename;
  uri: string;
  name: string;
  trackDuration: TrackDuration;
  playcount: string;
  albumOfTrack: AlbumOfTrack;
  artists: Artists;
  discNumber: number;
  trackNumber: number;
  playability: Playability;
  contentRating: ContentRating;
  associations: Associations;
}

export enum DataTypename {
  Track = "Track",
}

export interface AlbumOfTrack {
  uri: string;
  name: string;
  artists: Artists;
  coverArt: Avatar;
}

export interface Artists {
  items: ArtistsItem[];
}

export interface ArtistsItem {
  uri: URI;
  profile: Profile;
}

export interface Profile {
  name: Name;
}

export enum Name {
  CemAdrian = "Cem Adrian",
  MahmutOrhan = "Mahmut Orhan",
  SenaŞener = "Sena Şener",
  TunaKiremitçi = "Tuna Kiremitçi",
  Şanışer = "Şanışer",
}

export enum URI {
  SpotifyArtist2AWUCT9XtcvkjpFq1ZgpPj = "spotify:artist:2AWUCT9xtcvkjpFq1ZgpPj",
  SpotifyArtist3T8WiyalpvnB9AObcMufiE = "spotify:artist:3t8WiyalpvnB9AObcMufiE",
  SpotifyArtist5LUxu287CSPM7Jy3YS3L86 = "spotify:artist:5LUxu287CsPM7jy3yS3l86",
  SpotifyArtist799GDxXgsUDuGSbh5HJ3Kv = "spotify:artist:799GDxXgsUDuGSbh5HJ3Kv",
  SpotifyArtist7CW2EGwAuElNq09RVTZYsM = "spotify:artist:7CW2eGwAuElNq09rVtZYsM",
}

export interface Avatar {
  sources: Source[];
}

export interface Source {
  url: string;
  width: number | null;
  height: number | null;
}

export interface Associations {
  associatedVideos: AssociatedVideos;
}

export interface AssociatedVideos {
  totalCount: number;
}

export interface ContentRating {
  label: Label;
}

export enum Label {
  Explicit = "EXPLICIT",
  None = "NONE",
}

export interface Playability {
  playable: boolean;
  reason: Reason;
}

export enum Reason {
  Playable = "PLAYABLE",
}

export interface TrackDuration {
  totalMilliseconds: number;
}

export interface PagingInfo {
  offset: number;
  limit: number;
}

export interface Images {
  items: ImagesItem[];
}

export interface ImagesItem {
  extractedColors: ExtractedColors;
  sources: Source[];
}

export interface ExtractedColors {
  colorRaw: ColorRaw;
}

export interface ColorRaw {
  hex: string;
  isFallback: boolean;
}

export interface OwnerV2 {
  data: OwnerV2Data;
}

export interface OwnerV2Data {
  __typename: string;
  uri: string;
  username: string;
  name: string;
  avatar: Avatar;
}

export interface SharingInfo {
  shareUrl: string;
}

export interface Extensions {}

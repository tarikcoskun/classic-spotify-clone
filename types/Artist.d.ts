export interface ArtistResponse {
  data: ArtistData;
  extensions: Extensions;
}

export interface ArtistData {
  artistUnion: ArtistUnion;
}

export interface ArtistUnion {
  __typename: string;
  id: string;
  uri: string;
  saved: boolean;
  sharingInfo: SharingInfo;
  preRelease: null;
  profile: Profile;
  visuals: ArtistUnionVisuals;
  discography: Discography;
  stats: Stats;
  relatedVideos: RelatedVideos;
  relatedContent: RelatedContent;
  goods: Goods;
}

export interface Discography {
  latest: Latest;
  popularReleasesAlbums: PopularReleasesAlbums;
  singles: Albums;
  albums: Albums;
  compilations: Albums;
  topTracks: TopTracks;
}

export interface Albums {
  totalCount: number;
  items: AlbumsItem[];
}

export interface AlbumsItem {
  releases: Merch;
}

export interface Merch {
  items: Latest[];
}

export interface Latest {
  id: string;
  uri: string;
  name: string;
  type: LatestType;
  copyright: Copyright;
  date: LatestDate;
  coverArt: CoverArt;
  tracks: Tracks;
  label: string;
  playability: Playability;
  sharingInfo: SharingInfo;
}

export interface Copyright {
  items: Biography[];
}

export interface Biography {
  type: BiographyType;
  text: string;
}

export enum BiographyType {
  Autobiography = "AUTOBIOGRAPHY",
  C = "C",
  P = "P",
}

export interface CoverArt {
  sources: ItemSource[];
}

export interface ItemSource {
  url: string;
  width: number | null;
  height: number | null;
}

export interface LatestDate {
  year: number;
  month: number;
  day: number;
  precision: PurplePrecision;
}

export enum PurplePrecision {
  Day = "DAY",
}

export interface Playability {
  playable: boolean;
  reason: Reason;
}

export enum Reason {
  Playable = "PLAYABLE",
}

export interface SharingInfo {
  shareId: string;
  shareUrl: string;
}

export interface Tracks {
  totalCount: number;
}

export enum LatestType {
  Album = "ALBUM",
  Compilation = "COMPILATION",
  Ep = "EP",
  Single = "SINGLE",
}

export interface PopularReleasesAlbums {
  totalCount: number;
  items: Latest[];
}

export interface TopTracks {
  items: TopTracksItem[];
}

export interface TopTracksItem {
  uid: string;
  track: Track;
}

export interface Track {
  id: string;
  uri: string;
  name: string;
  playcount: string;
  discNumber: number;
  duration: Duration;
  playability: Playability;
  contentRating: ContentRating;
  artists: Artists;
  associations: Associations;
  albumOfTrack: AlbumOfTrack;
}

export interface AlbumOfTrack {
  uri: string;
  coverArt: BackgroundImage;
}

export interface BackgroundImage {
  sources: BackgroundImageSource[];
}

export interface BackgroundImageSource {
  url: string;
}

export interface Artists {
  items: ArtistsItem[];
}

export interface ArtistsItem {
  uri: string;
  profile: UserLocation;
}

export interface UserLocation {
  name: string;
}

export interface Associations {
  associatedVideos: Tracks;
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

export interface Goods {
  events: Events;
  merch: Merch;
}

export interface Events {
  userLocation: UserLocation;
  concerts: Concerts;
}

export interface Concerts {
  totalCount: number;
  items: ConcertsItem[];
  pagingInfo: PagingInfo;
}

export interface ConcertsItem {
  uri: string;
  title: string;
  category: Category;
  festival: boolean;
  nearUser: boolean;
  venue: Venue;
  partnerLinks: PartnerLinks;
  date: PurpleDate;
}

export enum Category {
  Concert = "CONCERT",
}

export interface PurpleDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  isoString: string;
  precision: FluffyPrecision;
}

export enum FluffyPrecision {
  Minute = "MINUTE",
}

export interface PartnerLinks {
  items: PartnerLinksItem[];
}

export interface PartnerLinksItem {
  partnerName: PartnerName;
  url: string;
}

export enum PartnerName {
  Songkick = "Songkick",
}

export interface Venue {
  name: string;
  location: UserLocation;
  coordinates: Coordinates;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface PagingInfo {
  limit: number;
}

export interface Profile {
  name: string;
  verified: boolean;
  pinnedItem: PinnedItem;
  biography: Biography;
  externalLinks: ExternalLinks;
  playlistsV2: PlaylistsV2;
}

export interface ExternalLinks {
  items: ExternalLinksItem[];
}

export interface ExternalLinksItem {
  name: string;
  url: string;
}

export interface PinnedItem {
  comment: string;
  type: string;
  backgroundImage: BackgroundImage;
  itemV2: ItemV2;
}

export interface ItemV2 {
  __typename: string;
  data: ItemV2Data;
}

export interface ItemV2Data {
  __typename: PurpleTypename;
  uri: string;
  name: string;
  images: Gallery;
}

export enum PurpleTypename {
  Playlist = "Playlist",
}

export interface Gallery {
  items: CoverArt[];
}

export interface PlaylistsV2 {
  totalCount: number;
  items: PlaylistsV2Item[];
}

export interface PlaylistsV2Item {
  data: PurpleData;
}

export interface PurpleData {
  __typename: PurpleTypename;
  uri: string;
  name: string;
  description: string;
  ownerV2: OwnerV2;
  images: Gallery;
}

export interface OwnerV2 {
  data: OwnerV2Data;
}

export interface OwnerV2Data {
  __typename: FluffyTypename;
  name: string;
}

export enum FluffyTypename {
  User = "User",
}

export interface RelatedContent {
  appearsOn: AppearsOn;
  featuringV2: V2;
  discoveredOnV2: V2;
  relatedArtists: RelatedArtists;
}

export interface AppearsOn {
  totalCount: number;
  items: AppearsOnItem[];
}

export interface AppearsOnItem {
  releases: Releases;
}

export interface Releases {
  totalCount: number;
  items: ReleasesItem[];
}

export interface ReleasesItem {
  uri: string;
  id: string;
  name: string;
  type: LatestType;
  artists: Artists;
  coverArt: CoverArt;
  date: FluffyDate;
  sharingInfo: SharingInfo;
}

export interface FluffyDate {
  year: number;
}

export interface V2 {
  totalCount: number;
  items: DiscoveredOnV2Item[];
}

export interface DiscoveredOnV2Item {
  data: FluffyData;
}

export interface FluffyData {
  __typename: PurpleTypename;
  uri: string;
  id: string;
  ownerV2: OwnerV2;
  name: string;
  description: string;
  images: Images;
}

export interface Images {
  totalCount: number;
  items: CoverArt[];
}

export interface RelatedArtists {
  totalCount: number;
  items: RelatedArtistsItem[];
}

export interface RelatedArtistsItem {
  id: string;
  uri: string;
  profile: UserLocation;
  visuals: ItemVisuals;
}

export interface ItemVisuals {
  avatarImage: CoverArt;
}

export interface RelatedVideos {
  __typename: string;
  totalCount: number;
  items: any[];
}

export interface Stats {
  followers: number;
  monthlyListeners: number;
  worldRank: number;
  topCities: TopCities;
}

export interface TopCities {
  items: TopCitiesItem[];
}

export interface TopCitiesItem {
  numberOfListeners: number;
  city: string;
  country: string;
  region: string;
}

export interface ArtistUnionVisuals {
  gallery: Gallery;
  avatarImage: RImage;
  headerImage: RImage;
}

export interface RImage {
  sources: ItemSource[];
  extractedColors: ExtractedColors;
}

export interface ExtractedColors {
  colorRaw: ColorRaw;
}

export interface ColorRaw {
  hex: string;
}

export interface Extensions {}

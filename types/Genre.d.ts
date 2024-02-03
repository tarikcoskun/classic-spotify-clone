export interface GenreResponse {
  data: GenreData;
}

export interface GenreData {
  browse: Browse;
}

export interface Browse {
  __typename: string;
  header: Header;
  uri: string;
  sections: Sections;
}

export interface Header {
  backgroundImage: null;
  color: Color;
  title: Title;
  subtitle: null;
}

export interface Color {
  hex: string;
}

export interface Title {
  transformedLabel: string;
}

export interface Sections {
  totalCount: number;
  pagingInfo: PagingInfo;
  items: SectionsItem[];
}

export interface SectionsItem {
  __typename: string;
  uri: string;
  data: ItemData;
  sectionItems: SectionItems;
  targetLocation: string;
}

export interface ItemData {
  __typename: string;
  title: Title;
  subtitle: null;
}

export interface SectionItems {
  totalCount: number;
  items: SectionItemsItem[];
}

export interface SectionItemsItem {
  uri: string;
  content: Content;
}

export interface Content {
  __typename: ContentTypename;
  data: ContentData;
}

export enum ContentTypename {
  PlaylistResponseWrapper = "PlaylistResponseWrapper",
}

export interface ContentData {
  __typename: PurpleTypename;
  uri: string;
  name: string;
  description: string;
  images: Images;
  format: Format;
  attributes: Attribute[];
  ownerV2: OwnerV2;
}

export enum PurpleTypename {
  Playlist = "Playlist",
}

export interface Attribute {
  key: Key;
  value: string;
}

export enum Key {
  ChartEntityType = "chart_entity_type",
  LastUpdated = "last_updated",
  NewEntriesCount = "new_entries_count",
  RankType = "rank_type",
}

export enum Format {
  Chart = "chart",
}

export interface Images {
  items: ImagesItem[];
}

export interface ImagesItem {
  sources: Source[];
}

export interface Source {
  url: string;
  width: null;
  height: null;
}

export interface OwnerV2 {
  data: OwnerV2Data;
}

export interface OwnerV2Data {
  __typename: FluffyTypename;
  name: Name;
}

export enum FluffyTypename {
  User = "User",
}

export enum Name {
  Spotify = "Spotify",
}

export interface PagingInfo {
  nextOffset: null;
}

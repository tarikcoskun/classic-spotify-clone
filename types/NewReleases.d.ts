export interface NewReleasesResponse {
  data: NewReleasesData;
  extensions: Extensions;
}

export interface NewReleasesData {
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
  AlbumResponseWrapper = "AlbumResponseWrapper",
  PlaylistResponseWrapper = "PlaylistResponseWrapper",
}

export interface ContentData {
  __typename: DataTypename;
  uri: string;
  name: string;
  description?: string;
  images?: Images;
  format?: string;
  attributes?: Attribute[];
  ownerV2?: OwnerV2;
  artists?: Artists;
  coverArt?: CoverArt;
}

export enum DataTypename {
  Album = "Album",
  Playlist = "Playlist",
}

export interface Artists {
  items: ArtistsItem[];
}

export interface ArtistsItem {
  uri: string;
  profile: Profile;
}

export interface Profile {
  name: string;
}

export interface Attribute {
  key: string;
  value: string;
}

export interface CoverArt {
  sources: Source[];
}

export interface Source {
  url: string;
  width: number | null;
  height: number | null;
}

export interface Images {
  items: CoverArt[];
}

export interface OwnerV2 {
  data: OwnerV2Data;
}

export interface OwnerV2Data {
  __typename: string;
  name: string;
}

export interface PagingInfo {
  nextOffset: null;
}

export interface Extensions {}

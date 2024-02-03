export interface GenresResponse {
  data: GenresData;
}

export interface GenresData {
  browseStart: BrowseStart;
}

export interface BrowseStart {
  __typename: BrowseStartTypename;
  uri: string;
  sections: Sections;
}

export enum BrowseStartTypename {
  BrowseSectionContainer = "BrowseSectionContainer",
}

export interface Sections {
  items: SectionsItem[];
}

export interface SectionsItem {
  uri: string;
  data: ItemData;
  sectionItems: SectionItems;
}

export interface ItemData {
  __typename: string;
  title: Title;
}

export interface Title {
  transformedLabel: string;
}

export interface SectionItems {
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
  BrowseSectionContainerWrapper = "BrowseSectionContainerWrapper",
}

export interface ContentData {
  __typename: BrowseStartTypename;
  data: DataData;
}

export interface DataData {
  cardRepresentation: CardRepresentation;
}

export interface CardRepresentation {
  title: Title;
  artwork: Artwork;
  backgroundColor: BackgroundColor;
}

export interface Artwork {
  sources: Source[];
}

export interface Source {
  url: string;
  width: null;
  height: null;
}

export interface BackgroundColor {
  hex: string;
}

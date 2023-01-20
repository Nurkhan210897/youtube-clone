export interface videoItem {
  kind?:                string;
  etag?:                string;
  id?:                  string;
  snippet?:             videoItem;
  publishedAt:          string;
  channelId:            string;
  title:                string;
  description:          string;
  thumbnails:           Thumbnails;
  channelTitle:         string;
  tags:                 string[];
  categoryId:           string;
  liveBroadcastContent: string;
  defaultLanguage:      string;
  localized:            Localized;
  defaultAudioLanguage: string;
}

export interface Localized {
  title:       string;
  description: string;
}

export interface videoPayload {
  kind:          string;
  etag:          string;
  items:         Item[];
  nextPageToken: string;
  pageInfo:      PageInfo;
}

export interface Item {
  kind:    Kind;
  etag:    string;
  id:      string;
  snippet: Snippet;
}

export enum Kind {
  YoutubeVideo = "youtube#video",
}

export interface Snippet {
  publishedAt:           string;
  channelId:             string;
  title:                 string;
  description:           string;
  thumbnails:            Thumbnails;
  channelTitle:          string;
  tags?:                 string[];
  categoryId:            string;
  liveBroadcastContent:  LiveBroadcastContent;
  localized:             Localized;
  defaultAudioLanguage?: DefaultLanguage;
  defaultLanguage?:      DefaultLanguage;
}

export enum DefaultLanguage {
  En = "en",
  EnUS = "en-US",
}

export enum LiveBroadcastContent {
  None = "none",
}

export interface Localized {
  title:       string;
  description: string;
}

export interface Thumbnails {
  default:  Default;
  medium:   Default;
  high:     Default;
  standard: Default;
  maxres?:  Default;
}

export interface Default {
  url:    string;
  width:  number;
  height: number;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}


// baseDropdown
export interface ISection {
  text: string,
  symbol: string,
  section: string,
}

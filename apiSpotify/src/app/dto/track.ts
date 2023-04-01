import { Album } from "./album";
import { Artist } from "./artist";

export interface Track {
  album:Album,
  artists:Artist[],
  name:string,
  preview_url:string,
  uri:string

}

import { BodyPlayList } from "./body-play-list";

export interface InfoPlaylist {
  limit:number,
  total:number,
  previous:number,
  next:number,
  items:BodyPlayList[],

}

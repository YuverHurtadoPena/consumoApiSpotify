import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InfoPlaylist } from '../dto/info-playlist';
import { Saveplaylist } from '../dto/saveplaylist';
import { BoryAddItem } from '../dto/bory-add-item';
@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  notifier = new BehaviorSubject<boolean>(false);


  private clientId = '3b57e532bbb74b3f81969c35b6e8ef0c';
  private ClientSecret = '78f2623e4eeb4063a636e148e03419bd';
  private userId = '31l52hmglg5ul54alwj3e7gwhwwi';
  private httpClient: HttpClient;

  private urlBase="https://api.spotify.com/v1/";

  private token = localStorage.getItem("tokenSpotify");


  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getPlayLists(): Observable<InfoPlaylist> {
    return this.httpClient.get<InfoPlaylist>(
      this.urlBase+'users/' + this.userId + '/playlists',
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      }
    );
  }

  savePlayList(dto: Saveplaylist): Observable<any> {
    return this.httpClient.post<any>(
      this.urlBase+'users/' + this.userId + '/playlists',
      dto,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      }
    );
  }

  getItems(
    limitInit: number,
    limitEnd: number,
    idPlayList: any
  ): Observable<any> {
    return this.httpClient.get<any>(

      this.urlBase+'playlists/'+idPlayList+'/tracks?fields=items(track(images,preview_url,uri,artists(name),name,album(images,name)))&limit=' +
        limitEnd.toString() +
        '&offset=' +
        limitInit.toString(),
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      }
    );
  }

  searchMusic(name:string):Observable<any>{
    return this.httpClient.get<any>(

      this.urlBase+'search?q='+name+'&type=track&market=ES&limit=5&offset=0',
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      }
    );

  }

  saveItem(idPlayList:any,dto:BoryAddItem):Observable<any>{
    return this.httpClient.post<any>(

      this.urlBase+'playlists/'+idPlayList+'/tracks',dto,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      }
    );

  }


  deleteItem(idPlayList:any,dto:BoryAddItem):Observable<any>{
    return this.httpClient.delete<any>(
      this.urlBase+'playlists/'+idPlayList+'/tracks',
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
        body:dto
      }
    );

  }


}

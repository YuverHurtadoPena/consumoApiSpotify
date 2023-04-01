import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InfoPlaylist } from '../dto/info-playlist';
import { Saveplaylist } from '../dto/saveplaylist';
@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  notifier = new BehaviorSubject<boolean>(false);

  private clientId = '3b57e532bbb74b3f81969c35b6e8ef0c';
  private ClientSecret = '78f2623e4eeb4063a636e148e03419bd';
  private userId = '31l52hmglg5ul54alwj3e7gwhwwi';
  private httpClient: HttpClient;

  private token =
    'BQAB3mdrfmJnNPH8N_a2yhiTG9QI1RvgAWQMdG2C_R9L4p3hzGnP1XzLQ6Ya0jqRmtM_65BSkXVAIlM4ntjQgpEIrJ2yumP9qk0skUAGll_w45se7wd5R-4oI9Ln-VRuvDoWXxtTrlrc10t5gl6v7J7b4PCvEGbcCujRlmUb1124Cq47biW-gOgoFwcy5Moab7yMZwQDkZY2l398TqR6gqBLxsg8zv7MMkX21waqgjR5IF3ovTzH';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getPlayLists(): Observable<InfoPlaylist> {
    return this.httpClient.get<InfoPlaylist>(
      'https://api.spotify.com/v1/users/' + this.userId + '/playlists',
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      }
    );
  }

  savePlayList(dto: Saveplaylist): Observable<any> {
    return this.httpClient.post<any>(
      'https://api.spotify.com/v1/users/' + this.userId + '/playlists',
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

      'https://api.spotify.com/v1/playlists/'+idPlayList+'/tracks?fields=items(track(images,preview_url,uri,artists(name),name,album(images,name)))&limit=' +
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

      'https://api.spotify.com/v1/search?q='+name+'&type=track&market=ES&limit=5&offset=0',
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      }
    );

  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAllCharacters } from '../models/characters-array.model'

@Injectable({
  providedIn: 'root'
})
export class GetCharacterService {

  private baseUrl: string = 'https://dragonball-api.com/api/characters';

  constructor(private _httpClient: HttpClient) { }

  public getAllCharacters(url?: string): Observable<IAllCharacters>{
    return this._httpClient.get<IAllCharacters>(url || this.baseUrl);
  }
}

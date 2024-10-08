import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCharactersResponse } from '../models/apiclients/get.characters.response';

@Injectable({
  providedIn: 'root'
})
export class ApiRickMortyService {

  constructor(
    private http: HttpClient
  ) { }

  getCharactersByPage(page: number) {
    return this.http.get<GetCharactersResponse>(`https://rickandmortyapi.com/api/character?page=${page}`);
  }
}

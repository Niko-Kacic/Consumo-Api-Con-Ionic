import { Component, OnInit } from '@angular/core';
import { ApiRickMortyService } from '../services/api-rick-morty.service';
import { Info } from '../models/apiclients/info';
import { Character } from '../models/apiclients/character';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  info!: Info;
  characters: Character[] = [];
  currentPage: number = 1;

  constructor(
    private api: ApiRickMortyService
  ) {}

  ngOnInit(): void {
    this.loadCharacters(this.currentPage);
  }

  loadCharacters(page: number) {
    this.api.getCharactersByPage(page).subscribe((data) => {
      this.info = data.info;
      this.characters = data.results;
    });
  }

  nextPage() {
    if (this.info.next) {
      this.currentPage++;
      this.loadCharacters(this.currentPage);
    }
  }

  prevPage() {
    if (this.info.prev) {
      this.currentPage--;
      this.loadCharacters(this.currentPage);
    }
  }
}

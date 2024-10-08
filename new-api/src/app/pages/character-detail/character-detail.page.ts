// character-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RamApiService } from '../../services/ram-api.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  characterId: string | null = '';
  characterDetails!: Character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ramApiService: RamApiService
  ) {}

  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.characterId) {
      this.ramApiService.getCharacterById(this.characterId).subscribe({
        next: (character) => {
          this.characterDetails = character;
        },
        error: (err) => {
          console.error("Error al obtener los detalles del personaje", err);
        }
      });
    }
  }
}


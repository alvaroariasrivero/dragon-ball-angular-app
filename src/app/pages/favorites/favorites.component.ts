import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/characters-array.model';
import { CommonModule } from '@angular/common';
import { FavoriteCharactersService } from '../../services/favorite-characters.service';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {

  favorites: Character[] = [];

  constructor(private _favoriteCharacterService: FavoriteCharactersService){}

  ngOnInit(): void {
      this._favoriteCharacterService.favorites$.subscribe(dataFavorites => {
        this.favorites = dataFavorites;
      })
  }

  removeFavorite(character: Character): void {
    this._favoriteCharacterService.removeFavorite(character)
  }

}

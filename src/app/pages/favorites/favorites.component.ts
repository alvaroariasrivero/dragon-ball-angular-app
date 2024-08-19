import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/characters-array.model';
import { CommonModule } from '@angular/common';
import { FavoriteCharactersService } from '../../services/favorite-characters.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {

  favorites: Character[] = [];

  constructor(private favoriteCharacterService: FavoriteCharactersService){}

  ngOnInit(): void {
      this.favoriteCharacterService.favorites$.subscribe(dataFavorites => {
        this.favorites = dataFavorites;
      })
  }

  removeFavorite(character: Character): void {
    this.favoriteCharacterService.removeFavorite(character)
  }

}

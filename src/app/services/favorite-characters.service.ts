import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/characters-array.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCharactersService {

  constructor() { }

  private favorites: Character[] = [];
  private favoritesSubject = new BehaviorSubject<Character[]>(this.favorites);

  // Observable para que los componentes puedan suscribirse a los cambios
  favorites$ = this.favoritesSubject.asObservable();

  addFavorite(character: Character): void {
    this.favorites.push(character);
    this.favoritesSubject.next([...this.favorites]);
  }

  removeFavorite(character: Character): void {
    this.favorites = this.favorites.filter(fav => fav.id !== character.id);
    this.favoritesSubject.next([...this.favorites]);
  }

  getFavorites(): Character[] {
    return [...this.favorites];
  }
}

import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Character } from '../../models/characters-array.model';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent implements OnInit {

  buttonValue: string = ''
  
  @Input() characterData?: Character;
  @Output() favoriteSelected = new EventEmitter<Character>();

  ngOnInit(): void {
      if(window.location.pathname === '/favorites'){
        this.buttonValue = 'Eliminar de favoritos'
      }else{
        this.buttonValue = 'Añadir a favoritos'
      }
      
  }

  favoriteButton() {
    this.favoriteSelected.emit(this.characterData);
  }

}

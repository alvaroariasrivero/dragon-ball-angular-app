import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IAllCharacters } from '../../models/characters-array.model';
import { GetCharacterService } from '../../services/get-character.service';
import { CharacterCardComponent } from "../character-card/character-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  charactersList!: IAllCharacters;
  private currentUrl!: string;
  private _characterApiService = inject(GetCharacterService);

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this._characterApiService.getAllCharacters(this.currentUrl).subscribe((data: IAllCharacters) => {
      this.charactersList = data;
      console.log(this.charactersList);
      
    })
  }

  next(){
    if(this.charactersList.links.next){
      this.currentUrl = this.charactersList.links.next;
      this.loadCharacters();
      window.scrollTo(0, 0)
    }
  }

  prev(){
    if(this.charactersList.links.previous){
      this.currentUrl = this.charactersList.links.previous;
      this.loadCharacters();
      window.scrollTo(0, 0)
    }
  }

}

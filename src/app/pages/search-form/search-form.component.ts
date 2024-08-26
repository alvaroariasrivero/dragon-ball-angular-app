import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {

  characterForm: FormGroup;

  constructor(private form: FormBuilder){
    this.characterForm = this.form.group({
      characterName:['', Validators.required]
    })
  }

  sendData(){
    console.log(this.characterForm)
  }

}

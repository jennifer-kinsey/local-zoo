import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h3>Add
    <input type="image" src="/resources/style/add.png"  *ngIf="!formDisplay" (click)='toggleEditForm()' /></h3>
        <div *ngIf="formDisplay" id="edit-form">
    <div>
      <label>Enter New Species:</label><br>
      <input #newSpecies><br>

      <label>Enter Age:</label><br>
      <input #newAge><br>

      <label>Enter Sex:</label><br>
      <input #newSex><br>

      <label>Enter Date of Sighting:</label><br>
      <input #newLastSeen><br>

      <label>Enter Location:</label><br>
      <input #newLocation><br>

      <label>Enter Prevalence:</label><br>
      <input #newCommonality><br>

      <label>Enter Diet:</label><br>
      <input #newDiet><br>

      <label>Enter Likes:</label><br>
      <input #newLikes><br>

      <label>Enter Dislikes:</label><br>
      <input #newDislikes><br>

      <label>Enter Image Url:</label><br>
      <input #newPicture><br>

      <input type="image" src="/resources/style/add.png"  (click)='toggleEditForm()' (click)="
            submitForm(newSpecies.value, newAge.value, newDiet.value, newLocation.value, newSex.value, newLikes.value, newDislikes.value, newLastSeen.value, newCommonality.value, newPicture.value);
            newSpecies.value = '';
            newAge.value = '';
            newDiet.value ='';
            newLocation.value = '';
            newSex.value = '';
            newLikes.value = '';
            newDislikes.value = '';
            newLastSeen.value = '';
            newCommonality.value = '';
            newPicture.value = '';
      "/>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
   formDisplay: boolean = false;

  submitForm(
    species: string,
    age: string,
    diet: string,
    location: string,
    sex: string,
    likes: string,
    dislikes: string,
    lastSeen: string,
    commonality: string,
    picture: string
    ) {
    var newAnimalToAdd: Animal = new Animal(species, age, diet, location, sex, likes, dislikes, lastSeen, commonality, picture);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  toggleEditForm() {
    if(this.formDisplay === true) {
      this.formDisplay = false;
    } else {
      this.formDisplay = true;
    }
  }
}

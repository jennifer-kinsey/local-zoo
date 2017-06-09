import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.species}}</h3>
      <hr>
      <h3>Edit Animal Sighting:</h3>

      <label>Change Species Name:</label><br>
      <input [(ngModel)]="childSelectedAnimal.species"><br>

      <label>Change Age:</label><br>
      <input [(ngModel)]="childSelectedAnimal.age"><br>

      <label>Change Sex:</label><br>
      <input [(ngModel)]="childSelectedAnimal.sex"><br>

      <label>Change Species Date of Sighting:</label><br>
      <input [(ngModel)]="childSelectedAnimal.lastSeen"><br>

      <label>Change Species Location:</label><br>
      <input [(ngModel)]="childSelectedAnimal.location"><br>

      <label>Change Species Prevalance:</label><br>
      <input [(ngModel)]="childSelectedAnimal.commonality"><br>

      <label>Change Species Diet:</label><br>
      <input [(ngModel)]="childSelectedAnimal.diet"><br>

      <label>Change Species Likes:</label><br>
      <input [(ngModel)]="childSelectedAnimal.likes"><br>

      <label>Change Species Dislikes:</label><br>
      <input [(ngModel)]="childSelectedAnimal.dislikes"><br>

      <label>Change Species Picture:</label><br>
      <input [(ngModel)]="childSelectedAnimal.picture"><br>

      <button class="btn btn-primary"(click)="editButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() editButtonClickedSender = new EventEmitter();

  editButtonClicked() {
    this.editButtonClickedSender.emit();
  }
}

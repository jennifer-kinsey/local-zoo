import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Orlando Wetlands Park</h1>
  </div>
  <div class="container">
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (editButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
    new Animal('Purple Gallinule', 'adult', 'dragonflies, spiders and water plants', 'Raccoon Ln.', 'male', 'chatting it up with mud hens', 'gators', '6/8/17', 'uncommon', '/resources/style/purple.jpg'),
    new Animal('Hooded Merganser', 'adult', 'fish', 'Lake Searcy', 'male', 'mollusks', 'garbage', '6/8/17', 'uncommon', '/resources/style/duck.jpg'),
    new Animal('Anhinga', 'adult', 'young alligators', 'Cypress Swamp', 'female', 'sunning, swimming', 'getting alligators stuck in throat', '6/8/17', 'common', '/resources/style/anhinga.jpg'),
    new Animal('Eastern Towhee', 'adult', 'mosquitos, wild blackberries', 'Limpkin Lane', 'female', 'succulent snails', 'noisy gallinules', '6/8/17', 'common', '/resources/style/towhee.jpg'),
    new Animal('Ring-billed Gull', 'juvenile', 'rodents, eggs', 'Alligator Alley', 'male', 'preening', 'tourists', '4/1/17', 'rare', '/resources/style/gull.jpg'),
    new Animal('Roseate Spoonbill', 'juvenile', 'shrimp, mollusks', 'Bittern Blvd', 'female', 'spooning', 'sandhill cranes', '6/8/17', 'common', '/resources/style/spoonbill.jpg'),
    new Animal('Common Gallinule', 'juvenile', 'insects, spiders, earthworms', 'Warbler Way.', 'female', 'being chatty, showing up to photographers', 'strong perfume', '6/9/17', 'common', '/resources/style/common.jpg'),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}

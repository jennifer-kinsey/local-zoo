import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Orlando Wetlands Park</h1>
    </div>
    <h2>Animal Sightings</h2>
    <ul>
      <li *ngFor="let currentAnimal of animals">{{currentAnimal.species}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Hooded Merganser', 'adult', 'fish', 'Lake Searcy', 'male', 'mollusks', 'garbage', '6/8/17', 'uncommon', 'picgoeshere'),
    new Animal('Annihinga', 'adult', 'young alligators', 'Cypress Swamp', 'female', 'juicy leeches', 'getting alligators stuck in throat', '6/8/17', 'common', 'picgoeshere'),
    new Animal('Eastern Towhee', 'adult', 'mosquitos, wild blackberries', 'Limpkin Lane', 'female', 'succulent snails', 'noisy gallinules', '6/8/17', 'common', 'picgoeshere'),
    new Animal('Ring-billed Gull', 'juvenile', 'rodents, eggs', 'Alligator Alley', 'male', 'preening', 'tourists', '4/1/17', 'rare', 'img')
  ]
}

export class Animal {
  constructor(
    public species: string,
    public age: string,
    public diet: string,
    public location: string,
    public sex: string,
    public likes: string,
    public dislikes: string,
    public lastSeen: string,
    public commonality: string,
    public picture: string
  ){}
}

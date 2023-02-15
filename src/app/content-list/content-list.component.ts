import {Component, Input} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  @Input() contentItems: Content[];

  constructor() {
    this.contentItems = [
      { id: 1,
        title: 'One Piece',
        description: 'Follows the adventures of Monkey D Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger',
        creator: 'Eichiro Oda',
        type: 'Action, Adventure' },
      { id: 2,
        title: 'Blue Lock',
        description: 'High school soccer players from across Japan gather for a controversial project designed to create the best and most egoistic striker in the world',
        creator: 'Muneyuki Kaneshiro and Yusuke Nomura',
        type: 'Sport, Thriller' },
      { id: 3,
        title: 'Chainsaw Man',
        description: 'Follows the story of Denji, an impovershied young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws',
        creator: 'Tatsuki Fujimoto',
        type: 'Action, Comedy, Horror' },
      { id: 4,
        title: 'My Hero Academia',
        description: 'The story revolves around the main character Izuku Midoriya and is set in a world where most of the human population has gained the ability to develop superpowers called Quirks.',
        creator: 'Kohei Hirokoshi',
        type: 'Adventure, Sci-Fi, Superhero' },
      { id: 5,
        title: 'Buddy Daddies',
        description: 'A family of 3 that are not related to one another: Kazuki and Rei, assassins who live under one roof and miri, the daughter of the assassination target who ended up being picked up by Kazuki, who thinks is her biological father',
        creator: 'Vio Shimokura and Yuko Kakihara',
        type: 'Organized Crime, Childcare' },
      { id: 6,
        title: 'High Card',
        description: 'The oryal family of the Kingdom of Fourland holds a secret deck of 52 "X-Playing cards", each of which bestow a superhuman power or ability to whoever uses them.',
        creator: 'Homura Kawamoto',
        type: 'Action, Fantasy'}
    ];
  }
}

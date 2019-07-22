import { Component, OnInit } from '@angular/core';
import { GamerService } from '../servicios/gamer.service'

@Component({
  selector: 'app-gamers',
  templateUrl: './gamers.component.html',
  styleUrls: ['./gamers.component.css']
})
export class GamersComponent implements OnInit {

  quotes:object; 

  constructor(private gamerService:GamerService) { }

  ngOnInit() {
    this.getQuotes(); 
  }

  getQuotes() {
    return this.gamerService.getQuotes()
    .subscribe(data =>{
     this.quotes = data; 
    });
  }

}

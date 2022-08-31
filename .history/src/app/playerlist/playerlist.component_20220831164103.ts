/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.scss'],
})
export class PlayerlistComponent implements OnInit {


  const pages= [
    {
    url:"https://www.youtube.com/watch?v=nd3BUvviFJU",
    title:"Ouverture Compte Orange Money"
    },
    {
    url:"https://www.youtube.com/watch?v=p_BaizVFAYg",
    title:"Weeru Teranga la ak Orange Money ! "
    },
    {
    url:"https://www.youtube.com/watch?v=Ilq5McrFfCc",
    title:"Déplafonnement de compte via l'application Orange Money"
    },
    {
    url:"https://www.youtube.com/watch?v=VHvx0EehwFo",
    title:"Le transfert d'argent avec Orange Money Europe"
    }
    ];
  constructor() { }

  ngOnInit() {}

}

import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { TeppichService } from "../../../services/teppich.service";
import { Teppich } from "../../../model/teppich";
import { Router } from '@angular/router';


@Component({
  selector: 'app-teppich-list',
  templateUrl: './teppich-list.component.html',
  styleUrls: ['./teppich-list.component.css']
})


export class TeppichListComponent implements OnInit {

  teppiche: Teppich[];
  message: string;
  constructor(private teppichService: TeppichService, private router: Router) { }

  ngOnInit(): void {
   
    this.teppichService.getTeppichList().subscribe(next=>this.teppiche=next);
    
  }

  updateTeppich(id:number) {
   
    this.router.navigate(['update', id]);
  }

  deleteTeppich(id: number) {
    this.teppichService.deleteTeppich(id)
    .subscribe( data => {
      this.teppiche = this.teppiche.filter(u => u.id !== id );
    });
    this.message = 'Teppich wurde erfolgreich gelöscht.';
  }

  

}

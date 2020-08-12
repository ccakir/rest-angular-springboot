import { Component, OnInit } from '@angular/core';
import { Teppich } from "../../../model/teppich";
import { TeppichService } from "../../../services/teppich.service";
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-teppich',
  templateUrl: './create-teppich.component.html',
  styleUrls: ['./create-teppich.component.css']
})
export class CreateTeppichComponent implements OnInit {

  newTeppich: Teppich = new Teppich();
  submitted = false;

  constructor(private teppichService: TeppichService, private router: Router) { }

  ngOnInit(): void {
    
  }

  save() {

    this.teppichService.createTeppich(this.newTeppich)
      .subscribe(data => {
        this.router.navigate(['/teppiche']);
      });
    
      
  }


  onSubmit() {
    this.submitted = true;
    this.save();
  }
}

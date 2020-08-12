import { Component, OnInit } from '@angular/core';
import { Teppich } from 'src/app/model/teppich';
import { ActivatedRoute, Router } from '@angular/router';
import { TeppichService } from 'src/app/services/teppich.service';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-teppich',
  templateUrl: './update-teppich.component.html',
  styleUrls: ['./update-teppich.component.css']
})
export class UpdateTeppichComponent implements OnInit {

  id: number;
  teppich: Teppich;
  submitted: false;
  message: string;
 

  teppiche: Observable<Teppich[]>;
  

  constructor(private route: ActivatedRoute, private router:Router, private teppichService:TeppichService) { }

  ngOnInit(): void {

    this.teppich = new Teppich();
    
    this.id = this.route.snapshot.params['id'];

    
    this.teppichService.getTeppich(this.id)
    .subscribe(data => {
      console.log(data)
      this.teppich = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateTeppich();

  }
  updateTeppich() {
    this.teppichService.updateTeppich(this.id, this.teppich)
    .subscribe( data => {
      this.router.navigate(['/teppiche']);
    });
    alert('Teppich wurde aktualisiert.');

    
  }
  

}

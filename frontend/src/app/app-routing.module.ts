import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeppichListComponent } from './components/teppich/teppich-list/teppich-list.component';
import { from } from 'rxjs';
import { CreateTeppichComponent } from './components/teppich/create-teppich/create-teppich.component';
import { UpdateTeppichComponent } from './components/teppich/update-teppich/update-teppich.component';


const routes: Routes = [
  { path: '', redirectTo: 'teppiche', pathMatch: 'full'},
  { path: 'teppiche', component: TeppichListComponent },
  { path: 'add', component: CreateTeppichComponent },
  { path: 'update/:id', component: UpdateTeppichComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

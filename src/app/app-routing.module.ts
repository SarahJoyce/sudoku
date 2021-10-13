import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SudokugameComponent } from './sudokugame/sudokugame.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: SudokugameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

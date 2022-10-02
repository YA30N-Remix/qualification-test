import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TreeChecklistExample } from './pages/home/test/test.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: MainComponent, 
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' },  
      { path: 'tree', component: TreeChecklistExample, pathMatch: 'full' },  
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

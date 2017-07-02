import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './test-module/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'contact', pathMatch: 'full' },
      { path: 'contact', loadChildren: './test-module/test-module.module#TestModuleModule' },
     // { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// app-routing should be use RouterModule.forRoot not forChild.

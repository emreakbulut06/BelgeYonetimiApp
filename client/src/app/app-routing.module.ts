import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { UploadAndListComponent } from './upload-and-list/upload-and-list.component';
import { AllDocListComponent } from './all-doc-list/all-doc-list.component';
import { UserDocListComponent } from './user-doc-list/user-doc-list.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: HomeRegisterComponent },
  { path: "upload", component: UploadAndListComponent },
  { path: "all-docs", component: AllDocListComponent },
  { path: "user-docs", component: UserDocListComponent },
  { path: "**", component: HomeComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

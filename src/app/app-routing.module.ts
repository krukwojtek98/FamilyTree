import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { RegisterComponent } from './register/register.component';
import { TreeComponent } from './tree/tree.component';
import { FamilyMemberClassComponent } from './form/form.component';
import { ListOfTreesComponent } from './list-of-trees/list-of-trees.component';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent},
  { path: 'tree', component: TreeComponent, canActivate: [AuthGuard]},
  { path: 'form', component: FamilyMemberClassComponent, canActivate: [AuthGuard] },
  { path: 'listoftree', component: ListOfTreesComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogeComponent } from './cataloge/cataloge.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

//Modules are containers that can contain components, custom pipes, services, routes
const routs: Routes=[
  {path:'home',component:HomeComponent,title:"Home- Joe's Robot shop"},
  // {path:'cataloge/:filter',component:CatalogeComponent,title:"Cataloge- Joe's Robot shop"},
  {path:'cataloge',component:CatalogeComponent,title:"Cataloge- Joe's Robot shop"},
  {path:'cart',component:CartComponent,title:"Cart- Joe's Robot shop"},
  {path:'sign-in',component:SignInComponent},
  {path:'form-controls',component:TemplateFormControlsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routs)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

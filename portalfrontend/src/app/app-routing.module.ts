import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { NewhomeComponent } from './pages/newhome/newhome.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ShowCategoryComponent } from './pages/admin/show-category/show-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';



const routes: Routes = [
  {
    path:'',
    component:NewhomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
        
      },
      {
        path:'profile',
        component:ProfileComponent,
        
      },
      {
        path:'categories',
        component:ShowCategoryComponent,
        
      },
      {
        path:'addCaegories',
        component:AddCategoryComponent,
      },
      {
        path:'viewQuizzes',
        component:ViewQuizzesComponent,
      },
      {
        path:'addQuiz',
        component:AddQuizComponent,
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent,
      },

    ]
  },
  {
    path:'user-dashboard',
    component:UserdashboardComponent,
    pathMatch:'full',
    canActivate:[normalGuard]

  },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

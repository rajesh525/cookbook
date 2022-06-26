import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipeManagerComponent } from './components/recipe-manager/recipe-manager.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';

const routes: Routes = [
  {path:'',redirectTo:'recipes/admin', pathMatch:'full'},
  {path:'recipes/admin',component:RecipeManagerComponent},
  {path:'recipes/add',component:AddRecipeComponent},
  {path:'recipes/edit/:recipeId',component:EditRecipeComponent},
  {path:'recipes/view/:recipeId',component:ViewRecipeComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

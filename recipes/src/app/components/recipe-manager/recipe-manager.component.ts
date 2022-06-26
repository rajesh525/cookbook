import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/IRecipe';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe-manager',
  templateUrl: './recipe-manager.component.html',
  styleUrls: ['./recipe-manager.component.css']
})
export class RecipeManagerComponent implements OnInit {
  public loading:boolean=false;
  public searchString:string="";
  public recipes:IRecipe[]=[];
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.getAllRecipes();
  }
 public getAllRecipes(){
  this.loading=true;
  this.recipeService.getAllRecipes().subscribe( response =>{this.recipes=response;})
  this.loading=false;
 }

 public deleteRecipe(id:string|undefined){
        if(id){
          this.recipeService.deleteRecipe(id).subscribe((data)=>{
            this.getAllRecipes();
          });
        }
  }

  public search(text:string){
    this.recipes= this.recipes.filter(x=>x.recipeName.includes(text))
  }
}

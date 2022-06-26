import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from 'src/app/models/IRecipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  public loading:boolean=false;
  public recipeId:string |null=null;
  public recipe:IRecipe={} as IRecipe;

  constructor(private recipeService:RecipeService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.recipeId=param.get('recipeId');
    });
    if(this.recipeId){
      this.loading=true;
      this.recipeService.getRecipe(this.recipeId).subscribe((data)=>{
        this.recipe=data;
        this.loading=false;
      });
    }
  }
  public updateRecipe(){
    this.loading=true;  
    this.recipeService.updateRecipe(this.recipe).subscribe((data)=>{
        this.loading=false;
        this.router.navigate(['/']).then();
      });
  }
}

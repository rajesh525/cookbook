import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from 'src/app/models/IRecipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
public loading:boolean=false;
public recipeId:string |null=null;
public recipe:IRecipe={} as IRecipe;
constructor(private activatedRoute:ActivatedRoute,private recipeService:RecipeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) =>{
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

  public isRecipeNotEmpty(){
    return Object.keys(this.recipe).length>0;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipe } from 'src/app/models/IRecipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  public loading:boolean=false;
  public recipe:IRecipe={} as IRecipe;

  constructor(private recipeService:RecipeService,private router:Router) { }

  ngOnInit(): void {
  }
  public createRecipe(){
    this.recipeService.saveRecipe(this.recipe).subscribe((data)=>{
      this.router.navigate(['/']).then();
    });
  }
}

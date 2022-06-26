import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipe } from '../models/IRecipe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl='https://rajeshcookbook.azurewebsites.net/api/Cards'
  constructor(private http:HttpClient) { }

  getAllRecipes(): Observable<IRecipe[]>{
    return this.http.get<IRecipe[]>(this.baseUrl);
  }
  getRecipe(id:string): Observable<IRecipe>{
    return this.http.get<IRecipe>(this.baseUrl+'/'+id);
  }

  saveRecipe(card:IRecipe):Observable<IRecipe>{
    card.id="00000000-0000-0000-0000-000000000000";
    card.insertedDate= new Date();
  return this.http.post<IRecipe>(this.baseUrl,card);
  
  }
  deleteRecipe(id:string):Observable<IRecipe>{
    return this.http.delete<IRecipe>(this.baseUrl+'/'+id);
  }

  updateRecipe(card:IRecipe):Observable<IRecipe>{
    return this.http.put<IRecipe>(this.baseUrl+'/'+card.id,card);
  }
}

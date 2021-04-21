import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This a test recipe',
      'https://img.taste.com.au/27HLC_W5/taste/2019/05/one-pot-healthy-chicken-pasta-149595-2.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

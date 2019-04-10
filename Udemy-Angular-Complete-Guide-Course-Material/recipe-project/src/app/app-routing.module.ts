import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeMessageComponent } from './recipes/recipe-message/recipe-message.component';

const routes: Route[] = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeMessageComponent, pathMatch: 'full' },
      { path: ':id', component: RecipeDetailComponent },
    ]},
  { path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

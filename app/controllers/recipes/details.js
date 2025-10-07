import Controller from '@ember/controller';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class DetailsController extends Controller {

  @service recipeData
  @service router

  @action
  async deleteRecipe(recipeId) {
    this.recipeData.deleteRecipe(recipeId)
    this.router.transitionTo('recipes');
  }
}

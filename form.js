"use strict";
const formList = {
  // using the function binding to bind the addThought function to into this component
  bindings: {
    addThought: "&"
  },
  // the template for this component. big thing to note is line 9, the function addThought takes the argument of an object literal. The property newThought has the value of whatever our ngModel contains
  template: `
  <form ng-submit="$ctrl.onSubmit({ newPost: $ctrl.post.newPost});">
    <input type="text" placeholder="title" ng-model="$ctrl.post.newPost.title">
    <input type="text" ng-model="$ctrl.post.newPost.message">
    <button>Add</button>
  </form>
  `
};


angular
  .module("app")
  .component("formList", formList);
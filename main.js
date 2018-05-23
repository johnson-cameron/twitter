"use strict";
const main = {
  template: `
  <div id="container">
    <h1>Tid-Bits</h1>
    <button type="button" ng-click="$ctrl.openForm();">Add Post</button>
    <form-list ng-show="$ctrl.formOpen" ng-submit="$ctrl.onSubmit(addPost);"></form-list>
    <post ng-repeat="post in $ctrl.postList" post="post"></post>
  </div>
  `,
  controller: function() {
    const vm = this;
    vm.postList = [
      {title: "Titlerino", message: "Lorem ipsum dolor sit amet."},
    ];
    vm.openForm = () => {
      vm.formOpen = true;
    };
    vm.onSubmit = (item) => {
      console.log(item);
      vm.postList.unshift({
        title: item.title,
        message: item.message
      })
      item.title = "";
      item.message = "";
      vm.formOpen = false;
    };
  }
};

angular
  .module("app")
  .component("main", main);
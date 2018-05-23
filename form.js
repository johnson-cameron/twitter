"use strict";

const postForm = {
  bindings: {
    addTweet: "&"
  },
  template:`
  <button ng-click="$ctrl.showForm();">New Tweet</button>
  <form ng-show="$ctrl.show" ng-submit="$ctrl.addTweet({ newTweet: $ctrl.newTweet }); $ctrl.closeForm();">
    <label>Title</label>
    <input type="text" ng-model="$ctrl.newTweet.title">
    <label>Message</label>
    <textarea ng-model="$ctrl.newTweet.message"></textarea>
    <button>Post Tweet</button>
  </form>
  `,
  controller: function () {
    const vm = this;
    vm.showForm = () => {
      vm.show = true;
    };
    vm.closeForm = () => {
      vm.show = false;
      vm.newTweet = {};
    };

  }

};


angular
  .module("app")
  .component("postForm", postForm);
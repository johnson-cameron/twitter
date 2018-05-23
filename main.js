"use strict";

const socialPosts = {
  template:`
  <h1>Baby Twitter!!!!</h1>
  <post-form add-tweet="$ctrl.addTweet(newTweet)"></post-form>
  <section>
    <posts ng-repeat="tweet in $ctrl.myTweets" tweet="tweet"></posts>
  </section>
  `,
  controller: function() {
    const vm = this;
    vm.myTweets= [];
    vm.addTweet = (newTweet) => {
      console.log(newTweet)
      vm.myTweets.push({
        title: newTweet.title,
        message: newTweet.message
      })
    };
  }
};

angular
  .module("app")
  .component("socialPosts", socialPosts);
"use strict";

const posts = {
  bindings: {
   tweet: "<"
  },
  template:`
  <section>
    <h5>Title</h5>
    <p> {{ $ctrl.tweet.title }} </p>
    <h5>Message</h5>
    <p> {{ $ctrl.tweet.message }} </p>
  </section>
  `
}


angular
  .module("app")
  .component("posts", posts);
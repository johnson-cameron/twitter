"use strict";


const post = {
  bindings: {
    post: "<"
  },
  // our template for the component. We are ngRepeating the div on line 11 for each element in the contactList array
  // the paragraph on line 12 will be hidden until the contactList has 1 element(or more)
  template: `
  <section>
    <h4>{{ $ctrl.post.title }}</h4>
    <p>{{ $ctrl.post.message }}</p>
  </section>
  `
}

angular
  .module("app")
  .component("post", post);
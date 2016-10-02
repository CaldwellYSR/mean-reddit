angular.module("meanreddit").component("post", {
    bindings: {
        postid: "@"
    },
    controller: "postCtrl",
    templateUrl: "/templates/post.html",
    transclude: true
});

angular.module("meanreddit").controller("postCtrl", [function() {
    this.post = {
        id: this.postid,
        title: "Hello, World",
        content: "Hey guys and gals, this is a test and I sure hope it works",
        upvotes: 0
    }
    this.upvote = function() {
        this.post.upvotes++;
    }
    this.downvote = function() {
        this.post.upvotes--;
    }
}]);

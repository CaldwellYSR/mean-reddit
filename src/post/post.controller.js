angular.module("meanreddit").controller("postCtrl", ["postService", function(postService) {
    this.post = postService.getPost(this.postid);
    this.upvote = function() {
        this.post.upvotes++;
    }
    this.downvote = function() {
        this.post.upvotes--;
    }
}]);

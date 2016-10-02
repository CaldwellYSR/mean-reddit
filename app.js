angular.module("meanreddit", []);

angular.module("meanreddit").component("post", {
    bindings: {
        postid: "@"
    },
    controller: "postCtrl",
    templateUrl: "/templates/post.html"
});

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwicG9zdC9wb3N0LmNvbXBvbmVudC5qcyIsInBvc3QvcG9zdC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwibWVhbnJlZGRpdFwiLCBbXSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIm1lYW5yZWRkaXRcIikuY29tcG9uZW50KFwicG9zdFwiLCB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgcG9zdGlkOiBcIkBcIlxuICAgIH0sXG4gICAgY29udHJvbGxlcjogXCJwb3N0Q3RybFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi90ZW1wbGF0ZXMvcG9zdC5odG1sXCJcbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoXCJtZWFucmVkZGl0XCIpLmNvbnRyb2xsZXIoXCJwb3N0Q3RybFwiLCBbZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wb3N0ID0ge1xuICAgICAgICBpZDogdGhpcy5wb3N0aWQsXG4gICAgICAgIHRpdGxlOiBcIkhlbGxvLCBXb3JsZFwiLFxuICAgICAgICBjb250ZW50OiBcIkhleSBndXlzIGFuZCBnYWxzLCB0aGlzIGlzIGEgdGVzdCBhbmQgSSBzdXJlIGhvcGUgaXQgd29ya3NcIixcbiAgICAgICAgdXB2b3RlczogMFxuICAgIH1cbiAgICB0aGlzLnVwdm90ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBvc3QudXB2b3RlcysrO1xuICAgIH1cbiAgICB0aGlzLmRvd252b3RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucG9zdC51cHZvdGVzLS07XG4gICAgfVxufV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

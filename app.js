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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwicG9zdC9wb3N0LmNvbXBvbmVudC5qcyIsInBvc3QvcG9zdC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcIm1lYW5yZWRkaXRcIiwgW10pO1xuIiwiYW5ndWxhci5tb2R1bGUoXCJtZWFucmVkZGl0XCIpLmNvbXBvbmVudChcInBvc3RcIiwge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHBvc3RpZDogXCJAXCJcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IFwicG9zdEN0cmxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL3Bvc3QuaHRtbFwiXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKFwibWVhbnJlZGRpdFwiKS5jb250cm9sbGVyKFwicG9zdEN0cmxcIiwgW2Z1bmN0aW9uKCkge1xuICAgIHRoaXMucG9zdCA9IHtcbiAgICAgICAgdGl0bGU6IFwiSGVsbG8sIFdvcmxkXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiSGV5IGd1eXMgYW5kIGdhbHMsIHRoaXMgaXMgYSB0ZXN0IGFuZCBJIHN1cmUgaG9wZSBpdCB3b3Jrc1wiLFxuICAgICAgICB1cHZvdGVzOiAwXG4gICAgfVxuICAgIHRoaXMudXB2b3RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucG9zdC51cHZvdGVzKys7XG4gICAgfVxuICAgIHRoaXMuZG93bnZvdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wb3N0LnVwdm90ZXMtLTtcbiAgICB9XG59XSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

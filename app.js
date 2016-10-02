angular.module("meanreddit", []);

angular.module("meanreddit").component("post", {
    bindings: {
        postid: "@"
    },
    controller: "postCtrl",
    templateUrl: "/templates/post.html",
    transclude: true
});

angular.module("meanreddit").controller("postCtrl", ["postService", function(postService) {
    this.post = postService.getPost(this.postid);
    this.upvote = function() {
        this.post.upvotes++;
    }
    this.downvote = function() {
        this.post.upvotes--;
    }
}]);

angular.module("meanreddit").factory("postService", function() {
    var o = {
        posts: {
            "0":{
                title: "Hello, World",
                content: "Hey guys and gals, this is a test and I sure hope it works",
                upvotes: 0
            },
            "1": {
                title: "Light Speed",
                content: "How long before you can make the jump to light speed? It'll take a few moments to get the coordinates from the navi-computer. Are you kidding? At the rate they're gaining... Traveling through hyperspace isn't like dusting crops, boy! Without precise calculations we could fly right through a star or bounce too close to a supernova and that'd end your trip real quick, wouldn't it? What's that flashing? We're losing our deflector shield. Go strap yourself in, I'm going to make the jump to light speed.",
                upvotes: 1
            }
        },
        getPost: function(id) {
            return this.posts[id]
        }
    };
    return o;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwicG9zdC9wb3N0LmNvbXBvbmVudC5qcyIsInBvc3QvcG9zdC5jb250cm9sbGVyLmpzIiwicG9zdC9wb3N0LnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwibWVhbnJlZGRpdFwiLCBbXSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIm1lYW5yZWRkaXRcIikuY29tcG9uZW50KFwicG9zdFwiLCB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgcG9zdGlkOiBcIkBcIlxuICAgIH0sXG4gICAgY29udHJvbGxlcjogXCJwb3N0Q3RybFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi90ZW1wbGF0ZXMvcG9zdC5odG1sXCIsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIm1lYW5yZWRkaXRcIikuY29udHJvbGxlcihcInBvc3RDdHJsXCIsIFtcInBvc3RTZXJ2aWNlXCIsIGZ1bmN0aW9uKHBvc3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5wb3N0ID0gcG9zdFNlcnZpY2UuZ2V0UG9zdCh0aGlzLnBvc3RpZCk7XG4gICAgdGhpcy51cHZvdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wb3N0LnVwdm90ZXMrKztcbiAgICB9XG4gICAgdGhpcy5kb3dudm90ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBvc3QudXB2b3Rlcy0tO1xuICAgIH1cbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKFwibWVhbnJlZGRpdFwiKS5mYWN0b3J5KFwicG9zdFNlcnZpY2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIG8gPSB7XG4gICAgICAgIHBvc3RzOiB7XG4gICAgICAgICAgICBcIjBcIjp7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSGVsbG8sIFdvcmxkXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJIZXkgZ3V5cyBhbmQgZ2FscywgdGhpcyBpcyBhIHRlc3QgYW5kIEkgc3VyZSBob3BlIGl0IHdvcmtzXCIsXG4gICAgICAgICAgICAgICAgdXB2b3RlczogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMVwiOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTGlnaHQgU3BlZWRcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkhvdyBsb25nIGJlZm9yZSB5b3UgY2FuIG1ha2UgdGhlIGp1bXAgdG8gbGlnaHQgc3BlZWQ/IEl0J2xsIHRha2UgYSBmZXcgbW9tZW50cyB0byBnZXQgdGhlIGNvb3JkaW5hdGVzIGZyb20gdGhlIG5hdmktY29tcHV0ZXIuIEFyZSB5b3Uga2lkZGluZz8gQXQgdGhlIHJhdGUgdGhleSdyZSBnYWluaW5nLi4uIFRyYXZlbGluZyB0aHJvdWdoIGh5cGVyc3BhY2UgaXNuJ3QgbGlrZSBkdXN0aW5nIGNyb3BzLCBib3khIFdpdGhvdXQgcHJlY2lzZSBjYWxjdWxhdGlvbnMgd2UgY291bGQgZmx5IHJpZ2h0IHRocm91Z2ggYSBzdGFyIG9yIGJvdW5jZSB0b28gY2xvc2UgdG8gYSBzdXBlcm5vdmEgYW5kIHRoYXQnZCBlbmQgeW91ciB0cmlwIHJlYWwgcXVpY2ssIHdvdWxkbid0IGl0PyBXaGF0J3MgdGhhdCBmbGFzaGluZz8gV2UncmUgbG9zaW5nIG91ciBkZWZsZWN0b3Igc2hpZWxkLiBHbyBzdHJhcCB5b3Vyc2VsZiBpbiwgSSdtIGdvaW5nIHRvIG1ha2UgdGhlIGp1bXAgdG8gbGlnaHQgc3BlZWQuXCIsXG4gICAgICAgICAgICAgICAgdXB2b3RlczogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXRQb3N0OiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zdHNbaWRdXG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBvO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
